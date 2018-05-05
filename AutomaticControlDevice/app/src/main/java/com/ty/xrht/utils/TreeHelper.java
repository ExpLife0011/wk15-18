package com.ty.xrht.utils;

import com.ty.xrht.R;
import com.ty.xrht.feature.Home.Module.Node;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by yeah on 2017/10/14.
 */

public class TreeHelper {

    /**
     * 传入我们的普通bean，转化为我们排序后的Node
     *
     * @param datas
     * @param defaultExpandLevel
     * @return
     * @throws IllegalArgumentException
     * @throws IllegalAccessException
     */




    public static <T> List<Node> getSortedNodes(List<T> datas, int defaultExpandLevel) throws IllegalArgumentException,
            IllegalAccessException {
        List<Node> result = new ArrayList<Node>();
//将用户数据转化为List<Node>以及设置Node间关系
        List<Node> nodes = convetData2Node(datas);
//拿到根节点
        List<Node> rootNodes = getRootNodes(nodes);
//排序
        for (Node node : rootNodes) {
            addNode(result, node, defaultExpandLevel, 1);
        }
        return result;
    }

    /**
     * 过滤出所有可见的Node
     *
     * @param nodes
     * @return
     */
    public static List<Node> filterVisibleNode(List<Node> nodes) {
        List<Node> result = new ArrayList<Node>();
        for (Node node : nodes) {
// 如果为跟节点，或者上层目录为展开状态
            if (node.isRoot() || node.isParentExpand()) {
                setNodeIcon(node);
                result.add(node);
            }
        }
        return result;
    }

    /**
     * 将我们的数据转化为树的节点
     *
     * @param datas
     * @return
     * @throws NoSuchFieldException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     */
    private static <T> List<Node> convetData2Node(List<T> datas)
            throws IllegalArgumentException, IllegalAccessException {
        List<Node> nodes = new ArrayList<Node>();
        Node node = null;
        for (T t : datas) {
            int id = -1;
            int pId = -1;
            String label = null;
            boolean isLeaf = false;
            Class<? extends Object> clazz = t.getClass();
            Field[] declaredFields = clazz.getDeclaredFields();
            for (Field f : declaredFields) {
                if (f.getAnnotation(TreeNodeId.class) != null) {
                    f.setAccessible(true);
                    id = f.getInt(t);
                }
                if (f.getAnnotation(TreeNodePid.class) != null) {
                    f.setAccessible(true);
                    pId = f.getInt(t);
                }
                if (f.getAnnotation(TreeNodeLabel.class) != null) {
                    f.setAccessible(true);
                    label = (String) f.get(t);
                }

                if (f.getAnnotation(TreeNodeIsLeaf.class) != null) {
                    f.setAccessible(true);
                    isLeaf = (boolean) f.get(t);
                }

                if (id != -1 && pId != -1 && label != null && isLeaf != false) {
                    break;
                }
            }
            node = new Node(id, pId, label, isLeaf);
            nodes.add(node);
        }
/**
 * 设置Node间，父子关系;让每两个节点都比较一次，即可设置其中的关系
 */
        for (int i = 0; i < nodes.size(); i++) {
            Node n = nodes.get(i);
            for (int j = i + 1; j < nodes.size(); j++) {
                Node m = nodes.get(j);
                if (m.getpId() == n.getId()) {
                    n.getChildren().add(m);
                    m.setParent(n);
                } else if (m.getId() == n.getpId()) {
                    m.getChildren().add(n);
                    n.setParent(m);
                }
            }
        }
// 设置图片
        for (Node n : nodes) {
            setNodeIcon(n);
        }
        return nodes;
    }

    private static List<Node> getRootNodes(List<Node> nodes) {
        List<Node> root = new ArrayList<Node>();
        for (Node node : nodes) {
            if (node.isRoot())
                root.add(node);
        }
        return root;
    }

    /**
     * 把一个节点上的所有的内容都挂上去
     */
    private static void addNode(List<Node> nodes, Node node,
                                int defaultExpandLeval, int currentLevel) {
        nodes.add(node);
        if (defaultExpandLeval >= currentLevel) {
            node.setExpand(true);
        }
        if (node.isLeaf())
            return;
        for (int i = 0; i < node.getChildren().size(); i++) {
            addNode(nodes, node.getChildren().get(i), defaultExpandLeval,
                    currentLevel + 1);
        }
    }

    /**
     * 设置节点的图标
     *
     * @param node
     */
    private static void setNodeIcon(Node node) {
        if (!node.isLeaf() && node.isExpand()) {
            node.setIcon(R.mipmap.arrow_down);
        } else if (!node.isLeaf() && !node.isExpand()) {
            node.setIcon(R.mipmap.arrow_right);
        } else
            node.setIcon(-1);
    }



    public static <T> List<Node> appendNodes(List<Node> srcNodes, List<T> datas, int position) throws IllegalArgumentException,
            IllegalAccessException {
//将用户数据转化为List<Node>以及设置Node间关系

        List<Node> nodes = new ArrayList<Node>();
        Node node = null;
        for (T t : datas) {
            int id = -1;
            int pId = -1;
            String label = null;
            boolean isLeaf = false;
            Class<? extends Object> clazz = t.getClass();
            Field[] declaredFields = clazz.getDeclaredFields();
            for (Field f : declaredFields) {
                if (f.getAnnotation(TreeNodeId.class) != null) {
                    f.setAccessible(true);
                    id = f.getInt(t);
                }
                if (f.getAnnotation(TreeNodePid.class) != null) {
                    f.setAccessible(true);
                    pId = f.getInt(t);
                }
                if (f.getAnnotation(TreeNodeLabel.class) != null) {
                    f.setAccessible(true);
                    label = (String) f.get(t);
                }

                if (f.getAnnotation(TreeNodeIsLeaf.class) != null) {
                    f.setAccessible(true);
                    isLeaf = (boolean) f.get(t);
                }

                if (id != -1 && pId != -1 && label != null && isLeaf != false) {
                    break;
                }
            }
            node = new Node(id, pId, label, isLeaf);
            node.setExpand(false);
            nodes.add(node);
        }

/**
 * 设置Node间，父子关系;让每两个节点都比较一次，即可设置其中的关系
 */
        Node parent = srcNodes.get(position);
        for (int i = 0; i < nodes.size(); i++) {
            Node n = nodes.get(i);

            parent.getChildren().add(n);
            n.setParent(parent);
            srcNodes.add(position+1+i,n);
        }
        return srcNodes;
    }




}
