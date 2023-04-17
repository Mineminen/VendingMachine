<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"  %>

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
    								商品详情
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								商品详情
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
    									
										  <jsp:include flush="true" page="/qiantai/left.jsp"></jsp:include>
	                                    
    									<div class="col-xl-8 col-lg-8">
    										<div class="row pt-10 pb-10">
    											
	                                         
	                                          
<table style="width:100%; line-height:29px;font-size:12px;">
    <tr>
        <td width="300">
            <img src="<%=path %>/${goods.photo}"  style='width:280px' />
        </td>
        <td align="left" valign="top">
            <table width="100%">
                <tr>
                    <td style="font-size:16px;font:bold;">${goods.gtitle}</td>
                </tr>             
                 <tr><td>商品产地：${goods.address}</td></tr>
                <tr><td>已售出：${goods.by1}</td></tr>

 <tr><td>价格：
 <b style="color:red;font-size: 18px">${goods.price}</b>元
 </td></tr>
                <tr>
                    <td>
                        购买数量:

                        <input type="hidden" name="price" id="price"
                               value="${goods.price}">
                        <input type="number" id="quantity" value="1" min="1"
                               style="width:50px;"/>
                    </td>
                </tr>



                <tr><td>
                    <input type="button" value="加入购物车" onclick="addCart(${goods.gid})" class="button" style="width: 100px;" />

                    </td></tr>
            </table>

            <script>
                function addCart(id) {
                    var quantity = $("#quantity").val();
                    var price = $("#price").val();
                    $.ajax({
                        url: "<%=path%>/shoppingcarAdd.action",
                        type: "post",
                        data: {
                            "gid": id,
                            "quantity": quantity,
                            "price": price
                        },
                        success: function (data) {
                            if (data == 0) {
                                layer.msg("请先登录");
                            } else {
                                $("#totalquan").html(data);
                                layer.msg("加入成功");
                            }
                        }
                    });
                }


            </script>
            
        </td>
    </tr>


</table>

                                                <style type="text/css">
                                                    #tab {
                                                        height: auto;
                                                        position: relative;
                                                    }

                                                    #tab .up {
                                                        background: #01bad0;
                                                        color: #fff;
                                                        font-size: 15px;
                                                    }

                                                    #tab h3 {
                                                        float: left;
                                                        width: 123px;
                                                        height: 40px;
                                                        line-height: 40px;
                                                        margin: 0 0 0 0;
                                                        font-size: 14px;
                                                        cursor: pointer;
                                                        background-color: #c5c5c5;
                                                        text-align: center;
                                                        color: #5a5a5a;
                                                        font-family: Microsoft YaHei;
                                                        font-weight: normal;
                                                    }

                                                    #tab .block {
                                                        display: block;
                                                        border-top: 2px solid #01bad0;
                                                    }

                                                    #tab .divs {

                                                        top: 30px;
                                                        left: 0;
                                                        width: 100%;
                                                        border-top: 1px solid #01bad0;
                                                    }
                                                </style>


                                                <div id="tab">
                                                    <h3 class="up" id="two1">商品描述</h3>


                                                    <div  style="clear:both"></div>
                                                    <div class="block" id="con_two_1">
                                                        ${goods.gmemo}
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
    		</div>
    	</div>
    </main>


<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>


