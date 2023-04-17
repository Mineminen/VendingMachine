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

            <script type="text/javascript" src="<%=path%>/admin/js/jquery.min.js"></script>
            <script type="text/javascript" src="<%=path%>/admin/js/Chart.js"></script>
            <canvas id="chart-hbar-1" width="400" height="250"></canvas>
            <script type="text/javascript">

                new Chart($("#chart-hbar-1"), {
                    type: 'horizontalBar',
                    data: {
                        labels: [
                            <c:forEach items="${ReportDataList}" var="item">
                                "${item.name}",
                            </c:forEach>
                        ],
                        datasets: [{
                            label: "总销售数量",
                            backgroundColor: "rgba(51,202,185,0.5)",
                            borderColor: "rgba(0,0,0,0)",
                            hoverBackgroundColor: "rgba(51,202,185,0.7)",
                            hoverBorderColor: "rgba(0,0,0,0)",
                            data: [
                                <c:forEach items="${ReportDataList}" var="item">
                                    "${item.num}",
                                </c:forEach>
                            ]
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            </script>

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



