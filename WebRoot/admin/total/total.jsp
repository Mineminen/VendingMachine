<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"  %> 
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


                            <table style="width: 100%;text-align: center">
    <tr>
        <td>

            <table style="width: 100%;text-align: center">
                <tr>
                    <td align="center">
                        <script type="text/javascript" src="<%=path%>/admin/js/jquery.min.js"></script>
                        <script type="text/javascript" src="<%=path%>/admin/js/Chart.js"></script>
                        <canvas id="chart-pie" width="410" height="410"></canvas>
                        <script type="text/javascript">
                            new Chart($("#chart-pie"), {
                                type: 'pie',
                                data: {
                                    labels: [
                                        <c:forEach items="${ReportDataList}" var="item">
                                            "${item.name}",
                                        </c:forEach>
                                    ],
                                    datasets: [{
                                        data: [
                                            <c:forEach items="${ReportDataList}" var="item">
                                                "${item.num}",
                                            </c:forEach>
                                        ],
                                        backgroundColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
                                            'rgb(224,13,57)', 'rgb(46,189,13)', 'rgb(4,51,169)',
                                        ],
                                    }]
                                },
                                options: {
                                    responsive: false
                                }
                            });
                        </script>
                    </td>
                </tr>

            </table>

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



