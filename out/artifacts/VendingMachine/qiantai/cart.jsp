<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg" %>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
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
								购物车
							</h3>
						</div>
						<div class="bz-breadcrumb-list">
							<a href="<%=path%>/index.action">
								网站首页
							</a>
							<span>
    								购物车
    							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div class="cart-area pt-60 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-8">
                    <div class="bz-shopping-cart-table cart-page table-full mb-20">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>商品名称</th>
                                    <th>价格</th>
                                    <th>数量</th>
                                    <th>总金额</th>
                                </tr>
                            </thead>
                            <tbody>


<c:forEach items="${shoppingcarList}" var="carts" varStatus="status" >
                                <tr>
                                    <td>
                                        <div class="bz-shopping-cart-product-box">
                                            <div class="action-close"><i class="fal fa-times" onclick="layer.confirm('您确定要取消购买的商品吗？',{icon:3,title:'提示'},function(index){
                                                    layer.close(index);
                                                    window.location.href='<%=path %>/shoppingcarDel.action?id=${carts.id}';
                                                    });"></i></div>
                                            <div class="image"><img src="<%=path%>/${carts.by2}"></div>
                                            <div class="title-wrap"><h4 class="title">${carts.by1}</h4></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="bz-product-cart-price"><span>￥${carts.price}</span></div>
                                    </td>
                                    <td>
                                        <div class="bz-shop-details-content-quantity-box">
                                           <a href="<%=path%>/shoppingcarEdit.action?id=${carts.id}&f=1" class="plus"><i
                                                    class="fal fa-plus"></i></a><input type="text" readonly=""
                                                                                       name="quantity" value="${carts.quantity}">
                                            <c:if test="${carts.quantity==1}">
                                                <a class="minus"><i class="fal fa-minus"></i></a>
                                            </c:if>
                                            <c:if test="${carts.quantity!=1}">

                                            <a
                                                    href="<%=path%>/shoppingcarEdit.action?id=${carts.id}&f=2" class="minus"><i class="fal fa-minus"></i></a>
                                            </c:if>


                                        </div>
                                    </td>
                                    <td>
                                        <div class="bz-product-cart-price"><span>￥
                                        <c:out value="${carts.price*carts.quantity}"></c:out>
                                        </span></div>
                                    </td>
                                </tr>
</c:forEach>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <form  action="<%=path %>/toOrder.action" method="post" id="form1">
                    <div class="bz-cart-total-box-wrapper ml-30 mb-40"><h4 class="bz-cart-total-box-title">订单金额</h4>
                        <div class="bz-cart-total-box-inner-box">
                            <ul>



                                <li class="b-top"><span class="cart-total-label">总金额</span><span
                                        class="cart-total-value text-red">￥

<c:out value="${total}"></c:out>
     <input type="hidden" name="omoney" value="${total}">
                                </span></li>
                            </ul>
                        </div>
                        <div class="cart-total-button"><a href="javascript:void(0)" class="cart-total-btn" id="jiesuan">结算</a></div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    $(function () {
        $("#jiesuan").click(function () {

            //如果商品金额为零不能结算
            var omoney=$("input[name='omoney']").val();
            if(omoney==0){
                layer.msg("您还没有选择商品哦！",{icon:5});
                return;
            }

            $("#form1").submit();
        })
    })
</script>


<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>


