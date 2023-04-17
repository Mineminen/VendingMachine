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


                            
    <table style="width: 100%;" >
               <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
账号:</td><td>${members.lname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
登录密码:</td><td>${members.password} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
姓名:</td><td>${members.mname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
手机号码:</td><td>${members.phone} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
Email:</td><td>${members.email} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
联系地址:</td><td>${members.address} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
注册时间:</td><td>${members.addtime} </td></tr>


        <tr>
            <td>&nbsp;</td>
            <td align="left">          
                <input name="btnReturn" type="button" value="返 回"   class="btn btn-success btn-w-md "  onclick="history.go(-1);"  />
            </td>
        </tr>
    </table>



                        </div>
                    </div>
                </div>
            </div>
        </div>





    </div>
</main>



  </body>
</html>



