package com.acesoftcorp.aceoffix7springboot2back.util;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import java.io.File;
import java.io.IOException;

/**
 * @Author: dong
 * @Date: 2020/11/2 10:39
 * @Version 1.0
 */
public class GetDirPathUtil {
    public static String getDirPath(){
        try {
            // 使用PathMatchingResourcePatternResolver解析类路径
            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            // 获取类路径根目录的资源
            Resource[] resources = resolver.getResources("classpath*:");

            if (resources.length > 0) {
                // 获取第一个资源的URL
                File classpathRoot = new File(resources[0].getURI());
                // 获取target目录的路径
                File targetDir = new File(classpathRoot.getParentFile().getParentFile(), "target/classes");
                if (targetDir.exists()) {
                    return targetDir.getAbsolutePath();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
    }
