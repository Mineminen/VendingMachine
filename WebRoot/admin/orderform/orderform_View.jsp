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
订单编号:</td><td>${orderform.no} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
账号:</td><td>${orderform.lname} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
订单金额:</td><td>${orderform.omoney} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
提交时间:</td><td>${orderform.otime} </td></tr>

            <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
订单状态:</td><td>${orderform.oflag} </td></tr>

        <tr><td  style="text-align:right; width:20%;    padding-right: 15px; ">
            订单商品:</td><td>
            <table style="width: 100%;" >
                <tr>
                    <td style="text-align:center; width:20%;    padding-right: 15px; ">商品名称</td>
                    <td style="text-align:center; width:20%;    padding-right: 15px; ">商品图片</td>
                    <td style="text-align:center; width:20%;    padding-right: 15px; ">商品价格</td>
                    <td style="text-align:center; width:20%;    padding-right: 15px; ">商品数量</td>

                </tr>
                <c:forEach items="${orderdetailList}" var="orderformdetail">
                    <tr>
                        <td style="text-align:center; width:20%;    padding-right: 15px; ">${orderformdetail.by1}</td>
                        <td style="text-align:center; width:20%;    padding-right: 15px; "><img src="<%=path%>/${orderformdetail.by2}" style="width: 60px;height: 60px;"></td>
                        <td style="text-align:center; width:20%;    padding-right: 15px; ">${orderformdetail.price}</td>
                        <td style="text-align:center; width:20%;    padding-right: 15px; ">${orderformdetail.quantity}</td>
                    </tr>
                </c:forEach>

            </table>
        </td></tr>
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



