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
ID:</td><td>${admin.aid} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
用户名:</td><td>${admin.lname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
登录密码:</td><td>${admin.password} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
姓名:</td><td>${admin.aname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
性别:</td><td>${admin.sex} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
手机号码:</td><td>${admin.tel} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
身份:</td><td>${admin.sf} </td></tr>


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



