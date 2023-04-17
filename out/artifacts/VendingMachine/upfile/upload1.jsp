<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
	<link rel="stylesheet" type="text/css" href="<%=path %>/css/base.css" />
    <script language="javascript">
        function check()
        {
            if(document.formAdd.fujian1.value=="")
            {
                alert("请选择文件");
                return false;
            }
            return true;
        }
    </script>
  </head>
  
  <body>
       <form action="<%=path %>/upfile/upload1_re.jsp" name="formAdd" method="post"  enctype="multipart/form-data">
           <input type="file" name="fujian1" id="fujian1" onKeyDown="javascript:alert('此信息不能手动输入');return false;" />
           <input type="submit" value="提交" onclick="return check()"/>
       </form>
  </body>
</html>
