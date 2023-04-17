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


                            <form  action="<%=path %>/membersEdit.action" method="post"  id="form1">
    <table style="width: 100%;" >
        <tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>账号:</td><td>
<input name="lname1" type="text" id="lname" style="width: 200px;"  required  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"   value='${members.lname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>登录密码:</td><td>
<input name="password" type="text" id="password" style="width: 200px;" required  value='${members.password}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>姓名:</td><td>
<input name="mname" type="text" id="mname" style="width: 200px;" required  value='${members.mname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>手机号码:</td><td>
<input name="phone" type="text" id="phone" style="width: 200px;"  required   pattern="^(13|15|17|18|19)[0-9]{9}$"   value='${members.phone}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>Email:</td><td>
<input name="email" type="text" id="email" style="width: 200px;"  required   pattern="\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"   value='${members.email}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>联系地址:</td><td>
<input name="address" type="text" id="address" style="width: 200px;" required  value='${members.address}' />
 </td></tr>



        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input name="lname" type="hidden"  value='<%= request.getParameter("id") %>'>
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



