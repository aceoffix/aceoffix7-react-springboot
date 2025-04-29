package com.acesoftcorp.aceoffix7springboot2back.util;


import java.io.Serializable;

/**
 * Description: 请求返回结果
 *
 * @author fc
 * @date 2024/4/10
 */

public class AjaxResult<T> implements Serializable {
    private static final long serialVersionUID = -8951382848863581212L;

    private String code;

    private String message;

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public T getResult() {
        return result;
    }

    private T result;

    public void setCode(String code) {
        this.code = code;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setResult(T result) {
        this.result = result;
    }


    public static <T> AjaxResult<T> success(T result){
        AjaxResult<T> ajaxResult = new AjaxResult<>();
        ajaxResult.setCode("200");
        ajaxResult.setMessage("成功");
        ajaxResult.setResult(result);
        return ajaxResult;
    }

}
