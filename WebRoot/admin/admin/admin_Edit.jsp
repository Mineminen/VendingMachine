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


                            <form  action="<%=path %>/adminEdit.action" method="post"  id="form1">
    <table style="width: 100%;" >
        
<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>用户名:</td><td>
<input name="lname" type="text" id="lname" style="width: 200px;" required  value='${admin.lname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>登录密码:</td><td>
<input name="password" type="text" id="password" style="width: 200px;" required  value='${admin.password}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>姓名:</td><td>
<input name="aname" type="text" id="aname" style="width: 200px;" required  value='${admin.aname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>性别:</td><td>
<input type="radio" name="sex"  value ="男"  <c:if test="${admin.sex=='男'}"> checked</c:if>  />男
<input type="radio" name="sex"  value ="女"  <c:if test="${admin.sex=='女'}"> checked</c:if>  />女

 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>手机号码:</td><td>
<input name="tel" type="text" id="tel" style="width: 200px;" required  value='${admin.tel}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>身份:</td><td>
<input name="sf" type="text" id="sf" style="width: 200px;" required  value='${admin.sf}' />
 </td></tr>


        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input name="aid" type="hidden"  value='<%= request.getParameter("id") %>'>
                <input type="submit" name="btnAdd" value="保 存"      class="btn btn-success btn-w-md " />
                <input name="btnReturn" type="button" value="返 回"   class=" btn btn-yellow btn-w-md"  onclick="history.go(-1);"  />
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



