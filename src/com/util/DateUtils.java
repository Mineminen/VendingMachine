package com.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
*
* @author Administrator
*
*/
public class DateUtils {

//返回当前时间 格式为：yyyy-MM-dd HH:mm:ss
public static String getNowTime(){
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
return sdf.format(new Date());
}

//返回当前时间 格式为：yyyy-MM-dd
public static String getNowDate(){
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
return sdf.format(new Date());
}

//返回当前时间 格式为：HH:mm:ss
public static String getNowTime2(){
SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
return sdf.format(new Date());
}

//返回当前时间 格式为：HH:mm
public static String getNowTime3(){
SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
return sdf.format(new Date());
}

//返回当前时间 格式为：yyyy-MM-dd HH:mm
public static String getNowTime4(){
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
return sdf.format(new Date());
}

//根据当前时间生成订单编号,格式为：yyMMddHHmmssSSS
public static String getOrderNo(){
SimpleDateFormat sdf = new SimpleDateFormat("yyMMddHHmmssSSS");
return sdf.format(new Date());
}


}

