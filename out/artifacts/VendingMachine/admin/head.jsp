<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <link href="<%=path %>/admin/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=path %>/admin/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="<%=path %>/admin/css/style2.css" rel="stylesheet">
    <style>
        table {
            line-height:30px;
            font-size: 13px;
        }

        input[type="text"] {
            height:25px;
        }

        input[type="password"] {
            height:25px;
        }

        select{
            height:25px;
        }
        .btn{
            width:65px;
        }
        th{text-align:center;}
    </style>

<style>
    #show_tab table {
        width: 100%;
        margin: 15px 0;
        border: 0;
    }

    #show_tab thead {
        background-color: #52dda0;
        color: #ffffff;
        font-weight: bold;
    }

    #show_tab,
    #show_tab th,
    #show_tab td {
        font-size: 0.95em;
        padding: 4px;
        border-collapse: collapse;
    }

    #show_tab th,
    #show_tab td {
        border: 1px solid #c4f3eb;
        border-width: 1px 0 1px 0;
    }

    #show_tab tr {
        border: 1px solid #c4f3eb;
    }

    /*#show_tab tbody tr:nth-child(odd) {*/
    /*    background-color: #fdfdfd;*/
    /*}*/
    /*#show_tab tbody tr:nth-child(even) {*/

    /*    background-color: #dcf8f3;*/
    /*}*/

    #show_tab tbody tr:hover {
        background-color: #c4f3eb;
    }

    td {
        padding-right: 10px;
    }
</style>
<script src="<%=path%>/layer/jquery.min.js" type="text/javascript"></script>
<script src="<%=path%>/layer/layer.js" type="text/javascript"></script>
<link href="<%=path%>/admin/css/pro.css" rel="stylesheet" type="text/css" />
  
