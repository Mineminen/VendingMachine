<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
 <jsp:include flush="true" page="${basePath}/admin/head.jsp"></jsp:include>     
 </head>
 
  <body>


        
     


<main class="layout-content">
    <div class="container-fluid" style="
    background-color: #f5f6fa;
    min-height: 400px;
">


        <div class="row">
            <div class="col-lg-12">
                <div class="card">

                    <div class="card-body">
                        <div class="table-responsive">


                            <form  action="<%=path %>/adminPass.action" method="post"  id="form1">
    <table style="width: 100%;" >
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>原密码:</td>
            <td class="tbright"><input name="txt_pwd" id="txt_pwd" type="password" required /></td>
        </tr>
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>新密码:</td>
            <td class="tbright"><input name="txt_pwd2" id="txt_pwd2" type="password" required /></td>
        </tr>
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>确认密码:</td>
            <td class="tbright"><input name="txt_pwd3"  id="txt_pwd3" type="password" required /> </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td align="left">             
                <input type="submit" name="btnAdd" value="确 定"      class="btn btn-success btn-w-md " />
             </td>
        </tr>
    </table> 
</form>



                        </div>
                    </div>
                </div>
            </div>
        </div>





    </div>
</main>



  </body>
</html>



