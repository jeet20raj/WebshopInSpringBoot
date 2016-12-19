package com.example.petsupplies.core.model;

import com.example.petsupplies.core.common.enums.Status;

public class OrderVO
{
   private Long orderId;
   private String userName;
   private Status orderStatus;
   public OrderVO()
   {
      // TODO Auto-generated constructor stub
   }
   public OrderVO(Long orderId, String userName, Status orderStatus)
   {
      this.orderId = orderId;
      this.userName = userName;
      this.orderStatus = orderStatus;
   }
   public Long getOrderId()
   {
      return orderId;
   }
   public void setOrderId(Long orderId)
   {
      this.orderId = orderId;
   }
   public String getUserName()
   {
      return userName;
   }
   public void setUserName(String userName)
   {
      this.userName = userName;
   }
   public Status getOrderStatus()
   {
      return orderStatus;
   }
   public void setOrderStatus(Status orderStatus)
   {
      this.orderStatus = orderStatus;
   }
   public String getStrOrderStatus()
   {
      return this.getOrderStatus().getStatusValue();
   }
}
