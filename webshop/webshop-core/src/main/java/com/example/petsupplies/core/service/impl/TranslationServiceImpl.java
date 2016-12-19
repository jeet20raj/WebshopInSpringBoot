package com.example.petsupplies.core.service.impl;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TranslationServiceImpl is used to provide the translation based on the locale.
 * Currently its being used for English only.
 * @author Jeetendra 
 * @version 1.0
 * @since 2015-06-12
 */

@RestController
public class TranslationServiceImpl{
	
	@RequestMapping(value="/translations")
	public String getTranslations() throws Exception {
		StringBuffer fileData = new StringBuffer(1000);
		URL jsonFileURL = Thread.currentThread().getContextClassLoader().getResource("messages_en.json");
		URLConnection connection = jsonFileURL.openConnection();//headers.getRequestHeaders().get("accept-language")
		InputStream in = connection.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(in));
        char[] buf = new char[1024];
 
        int numRead=0;
        while((numRead=reader.read(buf)) != -1){
            String readData = String.valueOf(buf, 0, numRead);
            fileData.append(readData);
            buf = new char[1024];
        }
 
        reader.close();
        String jsonString = fileData.toString();
        System.out.println(jsonString);
        return jsonString;
	}
}
