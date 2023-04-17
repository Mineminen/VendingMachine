<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<script src="<%=path%>/layer/jquery.min.js"></script>
<script src="<%=path%>/layer/layer.js" type="text/javascript"></script>

<html>
  <head>

  </head>
  
  <body>
  <% request.setCharacterEncoding("UTF-8");
      String message = (String) request.getAttribute("message");//获取传递的参数
      String alert = (String) request.getAttribute("alert");
      String path2 = (String) request.getAttribute("path");


      //判断alert
      if (message != null && !message.equals("")) {
  %>
  <script type="text/javascript">
      layer.ready(function() {
          layer.msg('<%=message%>', {icon: 1, time: 2000}, function () {
              location.href = '<%=path %>/<%=path2%>';
          });
      });

  </script>
  <%
      }%>

  <% if (alert != null && !alert.equals("")) {
  %>
  <script type="text/javascript">
        layer.ready(function() {
            layer.msg('<%=alert%>', {icon: 2, time: 2000}, function () {
                history.go(-1);
            });
        });
  </script>
  <%
      }%>

  </body>
</html>
