<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <meta charset="utf-8">
    <title>大学校园自动售货机管理系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="<%=path %>/admin/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=path %>/admin/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="<%=path %>/admin/css/style2.css" rel="stylesheet">

</head>

<body>


<% String adminLname=(String) session.getAttribute("adminLname");
String role=(String) session.getAttribute("role");
if(adminLname==null){ %>
<script type="text/javascript" language="javascript">
    alert("您还没有登录，请登录...");
    window.document.location.href = "<%=path %>/login.jsp";
</script>
<% return;} %>


<div class="layout-web">
    <div class="layout-container">
        <aside class="layout-sidebar">
            <div id="logo" class="sidebar-header"><a href="<%=path %>/admin/index.jsp" style="
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
">大学校园自动售货机管理系统</a></div>
            <div class="layout-sidebar-scroll">
                <nav class="sidebar-main">
                    <ul class="nav nav-drawer">
                        <li class="nav-item "><a href="<%=path %>/admin/index.jsp"><i class="mdi mdi-home"></i>后台首页</a>
                        </li>


                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>用户管理</a>
                            <ul class="nav nav-subnav">

                                <li><a href="<%=path %>/membersList.action" target="main_iframe">管理用户</a></li>

                            </ul>
                        </li>

                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>公告管理</a>
                            <ul class="nav nav-subnav">
                                <li><a href="<%=path %>/newsToAdd.action" target="main_iframe">添加公告</a></li>
                                <li><a href="<%=path %>/newsList.action" target="main_iframe">管理公告</a></li>

                            </ul>
                        </li>

                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>商品分类管理</a>
                            <ul class="nav nav-subnav">
                                <li><a href="<%=path %>/goodstypeToAdd.action" target="main_iframe">添加商品分类</a>
                                </li>
                                <li><a href="<%=path %>/goodstypeList.action" target="main_iframe">管理商品分类</a></li>

                            </ul>
                        </li>


                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>商品管理</a>
                            <ul class="nav nav-subnav">
                                <li><a href="<%=path %>/goodsToAdd.action" target="main_iframe">添加商品</a></li>
                                <li><a href="<%=path %>/goodsList.action" target="main_iframe">管理商品</a></li>

                            </ul>
                        </li>



                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>订单管理</a>
                            <ul class="nav nav-subnav">

                                <li><a href="<%=path %>/orderformList.action" target="main_iframe">管理订单</a></li>

                            </ul>
                        </li>




                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>帮助管理</a>
                            <ul class="nav nav-subnav">
                                <li><a href="<%=path %>/helpsToAdd.action" target="main_iframe">添加帮助</a></li>
                                <li><a href="<%=path %>/helpsList.action" target="main_iframe">管理帮助</a></li>

                            </ul>
                        </li>


                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>统计报表</a>
                            <ul class="nav nav-subnav">

                                <li><a href="<%=path %>/queryReport.action" target="main_iframe">商品分类销量统计</a></li>
                                <li><a href="<%=path %>/queryReport2.action" target="main_iframe">热销排行榜</a></li>

                            </ul>
                        </li>



                        <li class="nav-item nav-item-has-subnav"><a href="javascript:void(0)"><i
                                class="mdi mdi-format-align-justify"></i>系统管理</a>
                            <ul class="nav nav-subnav">

                                <%
                                if(role.equals("超级管理员")){%>
                                <li><a href="<%=path %>/adminToAdd.action" target="main_iframe">添加管理员</a></li>
                                <li><a href="<%=path %>/adminList.action" target="main_iframe">管理管理员</a></li>
                                <%
                                }
                                %>

                                <li><a href="<%=path %>/admin/admin/pass.jsp" target="main_iframe">修改密码</a></li>

                            </ul>
                        </li>


                    </ul>
                </nav>
                <div class="sidebar-footer">
                    <p class="copyright">Copyright © <a>大学校园自动售货机管理系统</a></p>
                </div>
            </div>
        </aside>
        <!--End 左侧导航-->
        <header class="layout-header">
            <nav class="navbar navbar-default">
                <div class="topbar">
                    <div class="topbar-left">
                        <div class="aside-toggler"><span class="toggler-bar"></span><span
                                class="toggler-bar"></span><span class="toggler-bar"></span></div>
                        <span class="navbar-page-title" id="pagetitle">后台首页</span>
                    </div>
                    <ul class="topbar-right">
                        <li class="dropdown dropdown-profile"><a href="javascript:void(0)" data-toggle="dropdown"><img
                                class="img-avatar img-avatar-48 m-r-10" src="img/avatar.jpg"><span><%= role%> <span
                                class="caret"></span></span></a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="<%=path %>/index.action" target="_blank"><i class="mdi mdi-home"></i>网站首页</a>
                                </li>
                                <li><a href="<%=path %>/admin/admin/pass.jsp" target="main_iframe"><i
                                        class="mdi mdi-lock-outline"></i>修改密码</a></li>

                                <li class="divider"></li>
                                <li><a href="<%=path %>/admin/quit.jsp"
                                       onclick='return confirm("您确定要退出登录吗？");'><i
                                        class="mdi mdi-logout-variant"></i>退出登录</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-skin"><span data-toggle="dropdown" class="icon-palette"><i
                                class="mdi mdi-palette"></i></span>
                            <ul class="dropdown-menu dropdown-menu-right" data-stoppropagation="true">
                                <li class="drop-title">
                                    <p>主题</p>
                                </li>
                                <li class="drop-skin-li clearfix"><span class="inverse"><input type="radio"
                                                                                               name="site_theme"
                                                                                               value="default"
                                                                                               id="site_theme_1"
                                                                                               checked=""><label
                                        for="site_theme_1"></label></span><span><input type="radio" name="site_theme"
                                                                                       value="dark"
                                                                                       id="site_theme_2"><label
                                        for="site_theme_2"></label></span><span><input type="radio" name="site_theme"
                                                                                       value="translucent"
                                                                                       id="site_theme_3"><label
                                        for="site_theme_3"></label></span></li>
                                <li class="drop-title">
                                    <p>LOGO</p>
                                </li>
                                <li class="drop-skin-li clearfix"><span class="inverse"><input type="radio"
                                                                                               name="logo_bg"
                                                                                               value="default"
                                                                                               id="logo_bg_1"
                                                                                               checked=""><label
                                        for="logo_bg_1"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_2"
                                                                                    id="logo_bg_2"><label
                                        for="logo_bg_2"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_3"
                                                                                    id="logo_bg_3"><label
                                        for="logo_bg_3"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_4"
                                                                                    id="logo_bg_4"><label
                                        for="logo_bg_4"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_5"
                                                                                    id="logo_bg_5"><label
                                        for="logo_bg_5"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_6"
                                                                                    id="logo_bg_6"><label
                                        for="logo_bg_6"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_7"
                                                                                    id="logo_bg_7"><label
                                        for="logo_bg_7"></label></span><span><input type="radio" name="logo_bg"
                                                                                    value="color_8"
                                                                                    id="logo_bg_8"><label
                                        for="logo_bg_8"></label></span></li>
                                <li class="drop-title">
                                    <p>头部</p>
                                </li>
                                <li class="drop-skin-li clearfix"><span class="inverse"><input type="radio"
                                                                                               name="header_bg"
                                                                                               value="default"
                                                                                               id="header_bg_1"
                                                                                               checked=""><label
                                        for="header_bg_1"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_2"
                                                                                      id="header_bg_2"><label
                                        for="header_bg_2"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_3"
                                                                                      id="header_bg_3"><label
                                        for="header_bg_3"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_4"
                                                                                      id="header_bg_4"><label
                                        for="header_bg_4"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_5"
                                                                                      id="header_bg_5"><label
                                        for="header_bg_5"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_6"
                                                                                      id="header_bg_6"><label
                                        for="header_bg_6"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_7"
                                                                                      id="header_bg_7"><label
                                        for="header_bg_7"></label></span><span><input type="radio" name="header_bg"
                                                                                      value="color_8"
                                                                                      id="header_bg_8"><label
                                        for="header_bg_8"></label></span></li>
                                <li class="drop-title">
                                    <p>侧边栏</p>
                                </li>
                                <li class="drop-skin-li clearfix"><span class="inverse"><input type="radio"
                                                                                               name="sidebar_bg"
                                                                                               value="default"
                                                                                               id="sidebar_bg_1"
                                                                                               checked=""><label
                                        for="sidebar_bg_1"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_2"
                                                                                       id="sidebar_bg_2"><label
                                        for="sidebar_bg_2"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_3"
                                                                                       id="sidebar_bg_3"><label
                                        for="sidebar_bg_3"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_4"
                                                                                       id="sidebar_bg_4"><label
                                        for="sidebar_bg_4"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_5"
                                                                                       id="sidebar_bg_5"><label
                                        for="sidebar_bg_5"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_6"
                                                                                       id="sidebar_bg_6"><label
                                        for="sidebar_bg_6"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_7"
                                                                                       id="sidebar_bg_7"><label
                                        for="sidebar_bg_7"></label></span><span><input type="radio" name="sidebar_bg"
                                                                                       value="color_8"
                                                                                       id="sidebar_bg_8"><label
                                        for="sidebar_bg_8"></label></span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!--End 头部信息-->
        <iframe name="main_iframe" width="100%" style="overflow-x: hidden" height="100%" class="main_iframe"
                id="default" src="right.jsp" frameborder="0" data-id="right.jsp"></iframe>


        <!--End 页面主要内容-->
    </div>
</div>
<script type="text/javascript" src="<%=path %>/admin/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=path %>/admin/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=path %>/admin/js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="<%=path %>/admin/js/main.js"></script>

<script type="text/javascript">
    $(document).ready(function (e) {


        $('body').attr("data-logobg", "color_8");
        $('body').attr("data-sidebarbg", "color_8");


        // 侧边栏菜单点击时，得到当前点击菜单的标题
        $(".layout-sidebar-scroll li a").click(function () {
            var title = $(this).text();

            console.log(title);
            // 将标题显示在面包屑导航中
            $("#pagetitle").html(title);
        });

        //main_iframe高度自适应设置
        $(window).load(reinitIframe);
        $(window).resize(reinitIframe);

        function reinitIframe() {
            var h = $(window).height();
            var iframe1 = $(".main_iframe");
            iframe1.height(h - 80 + "px");
        };
    });
</script>


</body>
</html>




