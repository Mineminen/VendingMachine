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


                            <style>
                    
                     tr{line-height: 30px;}
                  
                     table{line-height: 30px;font-size: 12px}
                  </style>
                 <table class="table" style="width:100%;text-align:center;">
                
                          <tr>
                                   <td>
                                       &nbsp;</td>
                               </tr>
                               <tr>
                                   <td>
                                       &nbsp;</td>
                               </tr>
                               <tr>
                                   <td>
                                       欢迎您的登录！</td>
                               </tr>
                               <tr>
                                   <td>
                                       您的登录IP为：<%=  request.getRemoteAddr() %></td>
                               </tr>
                       
                               <tr>
                                   <td>
                                       &nbsp;</td>
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


