<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>

<jsp:include flush="true" page="/qiantai/head.jsp"></jsp:include>


<main>
    	<div class="breadcrumb-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="bz-breadcrumb-wrap d-flex justify-content-between align-items-center">
    						<div class="bz-breadcrumb-content">
    							<h3 class="bz-breadcrumb-content-title">
    								订单详情
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								订单详情
    							</span>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="shop-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="tab-content" id="nav-product-tabContent">
    						<div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
    							<div class="shop-grid-product-tab-wrapper">
    								<div class="row">
    									
									 <jsp:include flush="true" page="/qiantai/menu.jsp"></jsp:include>
	                                    
    									<div class="col-xl-9 col-lg-9">
    										<div class="row pt-10 pb-10">
    											
    											
	                                            
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
                <input name="btnReturn" type="button" value="返 回"   class="button"  onclick="history.go(-1);"  />
            </td>
        </tr>
    </table>
   

	                                            
	                                            
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    						
	                        
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </main>




<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>


