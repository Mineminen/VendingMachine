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
ID:</td><td>${goods.gid} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品分类:</td><td>${goods.tyname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品名称:</td><td>${goods.gtitle} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品图片:</td><td><img src='<%=path %>/${goods.photo}' style="width: 100px;height: 80px" />
 </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品产地:</td><td>${goods.address} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
价格:</td><td>${goods.price} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品描述:</td><td>${goods.gmemo} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
商品状态:</td><td>${goods.gflag} </td></tr>


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



