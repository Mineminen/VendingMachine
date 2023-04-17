<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<script type="text/javascript">
			<c:if test="${message!=null && ''!=message}">
               alert("${message}");
           	</c:if>
           
           	<c:if test="${path!=null && ''!=path}">
           	   var url = "<%=path%>/${path}";
           	   <c:if test="${id!=null && id!=0}">
           	   	url = url+"?id="+${id};
           	   </c:if>
           	   <c:if test="${uid!=null }">
           	   	url = url+"?uid="+${uid};
           	   </c:if>
           	 
           	    <c:if test="${orderid!=null && orderid!=0}">
           	   	url = url+"?orderid="+${orderid};
           	   </c:if>
              	document.location.href=url;
           	</c:if>
       </script>
	</head>

	<body>

	</body>
</html>
