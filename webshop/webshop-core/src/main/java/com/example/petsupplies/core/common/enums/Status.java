package com.example.petsupplies.core.common.enums;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Status enum is used to define order's status like in progress,cancelled and shipped
 * 
 * @author Jeetendra
 * @version 1.0
 * @since 2015-06-22
 */
@JsonFormat(shape= JsonFormat.Shape.OBJECT)
public enum Status
{

   INPROGRESS("In Progress"), CANCLED("Canceled"), SHIPPED("Shipped");
   private String statusValue;

   private Status(String value)
   {
      this.statusValue = value;
   }

   @JsonValue
   public String getStatusValue()
   {
      return statusValue;
   }

   public void setStatusValue(String statusValue)
   {
      this.statusValue = statusValue;
   }

}
