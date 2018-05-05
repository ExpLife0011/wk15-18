<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace api\components;

use yii\base\InvalidParamException;
use yii\web\RequestParserInterface;
use yii\web\BadRequestHttpException;

/**
 * Parses a raw HTTP request using [[\yii\helpers\Json::decode()]]
 *
 * To enable parsing for JSON requests you can configure [[Request::parsers]] using this class:
 *
 * ```php
 * 'request' => [
 *     'parsers' => [
 *         'application/gzipped' => 'api\models\GZipParser',
 *     ]
 * ]
 * ```
 *
 * @author Dan Schmidt <danschmidt5189@gmail.com>
 * @since 2.0
 */
class GZipParser implements RequestParserInterface
{
    
    /**
     * @var boolean whether to throw a [[BadRequestHttpException]] if the body is invalid gzip
     */
    public $throwException = true;


    /**
     * Parses a HTTP request body.
     * @param string $rawBody the raw HTTP request body.
     * @param string $contentType the content type specified for the request body.
     * @return array parameters parsed from the request body
     * @throws BadRequestHttpException if the body contains invalid json and [[throwException]] is `true`.
     */
    public function parse($rawBody, $contentType)
    {
        try {
            return gzdecode($rawBody);
        } catch (InvalidParamException $e) {
            if ($this->throwException) {
                throw new BadRequestHttpException('Invalid GZip data in request body: ' . $e->getMessage(), 0, $e);
            }

            return null;
        }
    }
}
