package com.util;

import java.util.regex.Pattern;

public class removeHTML {
	public static String Html2Text(String inputString){
		String htmlStr = inputString; //含html标签的字符串
		String textStr ="";
		Pattern p_script;
		java.util.regex.Matcher m_script;
		Pattern p_style;
		java.util.regex.Matcher m_style;
		Pattern p_html;
		java.util.regex.Matcher m_html;

		try{
			String regEx_script = "<[\\s]*?script[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?script[\\s]*?>"; //定义script的正则表达式{或<script[^>]*?>[\\s\\S]*?<\\/script> }
			String regEx_style = "<[\\s]*?style[^>]*?>[\\s\\S]*?<[\\s]*?\\/[\\s]*?style[\\s]*?>"; //定义style的正则表达式{或<style[^>]*?>[\\s\\S]*?<\\/style> }
			String regEx_html = "<[^>]+>"; //定义HTML标签的正则表达式

			p_script = Pattern.compile(regEx_script,Pattern.CASE_INSENSITIVE);
			m_script = p_script.matcher(htmlStr);
			htmlStr = m_script.replaceAll(""); //过滤script标签

			p_style = Pattern.compile(regEx_style,Pattern.CASE_INSENSITIVE);
			m_style = p_style.matcher(htmlStr);
			htmlStr = m_style.replaceAll(""); //过滤style标签

			p_html = Pattern.compile(regEx_html,Pattern.CASE_INSENSITIVE);
			m_html = p_html.matcher(htmlStr);
			htmlStr = m_html.replaceAll(""); //过滤html标签
			htmlStr = htmlStr.replace("  ", "");
			htmlStr = htmlStr.replace("\n", "");
			htmlStr = htmlStr.replace("\t", "");
			textStr = htmlStr.trim();
			textStr = htmlStr;
			}catch(Exception e){

		}
		return textStr;//返回文本字符串
	}

	public static String Html2TextSub(String inputString,int t)
	{

		String htmlStr =Html2Text(inputString); //含html标签的字符串

		String textStr =htmlStr.length()>t?htmlStr.substring(0,t)+"……":htmlStr;

		return textStr;//返回文本字符串
	}
}

