<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<%
    String lname=(String) session.getAttribute("lname");
    if(lname==null){ %>
    <script type="text/javascript" language="javascript">
        alert("请先登录！");
        window.document.location.href = "<%=path%>/tologin.action";
    </script>
<% return;} %>

<div class="col-xl-3 col-lg-3 mb-40 mb-lg-0">
<div class="bz-shop-sidebar bz-shop-border pb-40 pt-40 pl-40 pr-40">
    <div class="bz-shop-sidebar-categories mb-30">
    	<h3 class="bz-shop-sidebar-categories-title">
    		我的菜单
    	</h3>
    	<div class="bz-shop-sidebar-categories-list">
    		<ul>
				<li><a href="<%=path%>/tomember.action">欢迎页面</a></li>
    			 <li><a href="<%=path%>/orderform_Manage.action">我的订单</a></li>


				<li><a href="<%=path%>/tomembers_Edit.action">修改个人信息</a></li>
				<li><a href="<%=path%>/tomembers_Password.action">修改密码</a></li>
<li><a href="<%=path%>/qiantai/lgout.jsp">退出登录</a></li>

    		</ul>
    	</div>
    </div>
    
</div>
</div>

