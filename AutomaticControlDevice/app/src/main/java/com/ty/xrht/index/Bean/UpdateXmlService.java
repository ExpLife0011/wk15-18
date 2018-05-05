package com.ty.xrht.index.Bean;

import org.simpleframework.xml.Element;
import org.simpleframework.xml.Root;

/**
 * Created by yeah on 2018/4/2.
 */

@Root(name = "update" , strict = false)
public class UpdateXmlService {
    @Element(name = "version")
    public String version;
    @Element(name = "url")
    public String url;
}
