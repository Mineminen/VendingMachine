<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>大学校园自动售货机管理系统</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<%=path%>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<%=path%>/css/animate.min.css">
    <link rel="stylesheet" href="<%=path%>/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="<%=path%>/css/magnific-popup.css">
    <link rel="stylesheet" href="<%=path%>/css/odometer.min.css">
    <link rel="stylesheet" href="<%=path%>/css/nice-select.css">
    <link rel="stylesheet" href="<%=path%>/css/cross2.min.css">
    <link rel="stylesheet" href="<%=path%>/css/meanmenu.css">
    <link rel="stylesheet" href="<%=path%>/css/swipper.css">
    <link rel="stylesheet" href="<%=path%>/css/select2.min.css">
    <link rel="stylesheet" href="<%=path%>/css/ui-range-slider.css">
    <link rel="stylesheet" href="<%=path%>/css/datepicker.css">
    <link rel="stylesheet" href="<%=path%>/css/main.css">
    <style type="text/css">
    .button{
           background: linear-gradient( 85deg, #00bcd4 0%,rgb(70 145 73) 100%);
        width: 70px;
 height:35px;
 border: 0;
 color: white;
    }
    .button:hover{
    background: linear-gradient( 291deg, rgb(9,198,215) 0%,
    rgb(148,227,234) 100%);
    }

    table{
        font-size: 13px;
        line-height:30px;
    }
    </style>
    
    <link href="<%=path%>/css/pro.css" rel="stylesheet">

    <script src="<%=path%>/js/jquery.min.js"></script>
    <script src="<%=path%>/layer/layer.js" type="text/javascript"></script>

    </head>


<div class="offcanvas-overlay"></div>
<header class="header-area">
    <div class="bz-topbar-area">
        <div class="container container-full-1">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-7">
                    <div class="bz-topbar-left">
                        <span id="time" style="color:#13c2c2; "></span>
                        <script type="text/javascript">
                                function showLocale(objD)
                                {
                                    var str,colorhead,colorfoot;
                                    var yy = objD.getYear();
                                    if(yy<1900) yy = yy+1900;
                                    var MM = objD.getMonth()+1;
                                    if(MM<10) MM = '0' + MM;
                                    var dd = objD.getDate();
                                    if(dd<10) dd = '0' + dd;
                                    var hh = objD.getHours();
                                    if(hh<10) hh = '0' + hh;
                                    var mm = objD.getMinutes();
                                    if(mm<10) mm = '0' + mm;
                                    var ss = objD.getSeconds();
                                    if(ss<10) ss = '0' + ss;
                                    var ww = objD.getDay();
                                    if  ( ww==0 )  colorhead="<font >";
                                    if  ( ww > 0 && ww < 6 )  colorhead="<font >";
                                    if  ( ww==6 )  colorhead="<font >";
                                    if  (ww==0)  ww="星期日";
                                    if  (ww==1)  ww="星期一";
                                    if  (ww==2)  ww="星期二";
                                    if  (ww==3)  ww="星期三";
                                    if  (ww==4)  ww="星期四";
                                    if  (ww==5)  ww="星期五";
                                    if  (ww==6)  ww="星期六";
                                    colorfoot="</font>"
                                    str = colorhead + yy + "年" + MM + "月" + dd + "日" + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
                                    return(str);
                                }
                                function tick()
                                {
                                    var today;
                                    today = new Date();
                                    document.getElementById("time").innerHTML = showLocale(today);
                                    window.setTimeout("tick()", 1000);
                                }
                                tick();
                            </script>


                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-5">
                    <div class="bz-topbar-right d-flex justify-content-end align-items-center">

                        <div class="bz-topbar-right-item">

                       
<% String lname = (String) session.getAttribute("lname");
                if (lname == null) { %>
    <a href="<%=path%>/tologin.action">用户登录</a>&nbsp|&nbsp;<a href="<%=path%>/toreg.action">用户注册</a>
                    <% }
                       else
                       { %>
                        <span style=" color: black;">您好：</span>
                        <span style=" font-family:Arial; color:#333">
                            <b style="color:red;"><%=lname  %></b>
                        </span> ，
                          <a href="<%=path %>/qiantai/lgout.jsp" style="  display: inline;">退出登录</a>
               <% } %>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bz-middle-area">
        <div class="container container-full-1">
            <div class="row align-items-center">
                <div class="col-xl-4 col-lg-4 col-md-6 col-4">
                    <div class="bz-middle-logo">
                        <a href="<%=path%>/index.action">
                            <img src="<%=path%>/img/logo.png" alt="img">
                        </a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-7 d-none d-lg-block">
                    <div class="bz-middle-wrap">

                        <div class="bz-middle-wrap-form" style="   width: 500px; margin-left: 100px; height:45px; ">

                            <div class="bz-middle-wrap-form-search">
                                <form class="forms" action="<%=path%>/goods_List.action" method="post">
                                    <input type="text" name="gtitle" placeholder="请输入要搜索的关键词" required>
                                    <button type="submit">
                                        <i class="far fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-6 col-8">
                    <div class="bz-middle-right text-end">
                        <a href="<%=path%>/toCart.action">
                            <i class="fal fa-shopping-cart"></i><span id="totalquan" style="color:red"><c:out value="${total2}"></c:out></span>
                        </a>
                    </div>
                    
               
                </div>
            </div>
        </div>
    </div>
    <div class="bz-header-main">
        <div class="container container-full-1">
            <div class="row align-items-center">
                <div class="col-2 d-lg-none">
                    <div class="bz-header-bar">
                        <a href="#0" class="side-toggle">
                            <i class="far fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div class="col-xl-10 col-lg-9 d-none d-lg-block">
                    <div class="bz-header-menu">
                        <nav id="bz-mobile-menu" class="bz-mobile-menu">
                            <ul>
                                <li>
                                    <a href="<%=path%>/index.action">网站首页</a>
                                </li>

                                <li> <a href="<%=path %>/news_List.action">公告中心</a> </li>
                                <li class="has-dropdown">
                                    <a href="<%=path%>/goods_List.action">商品中心</a>
                                    <ul class="submenu">
                                        <c:forEach items="${goodstypeList2}" var="goodstype" varStatus="status" >

                                            <li><a href="<%=path%>/goods_List.action?tyid=${goodstype.tyId}" >${goodstype.tyname}</a></li>
                                        </c:forEach>

                                    </ul>
                                </li>


                                <li> <a href="<%=path %>/toCart.action">购物车</a> </li>


                                <li> <a href="<%=path %>/helps_List.action">帮助中心</a> </li>

<li> <a href="<%=path %>/tomember.action">个人中心</a> </li>


                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-10">
                    <div class="bz-header-support text-end">
                        <span class="teltext"><i class="far fa-phone-alt"></i><a href="tel:400 456 7890"> 400 456 7890</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>






