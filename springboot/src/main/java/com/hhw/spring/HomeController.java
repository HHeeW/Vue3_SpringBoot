
package com.hhw.spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author HeeWon
 */

 @RestController
 @RequestMapping("/api")
 public class HomeController {
 
     @GetMapping("/hello")
     public String helloWorld() {
         return "hello!";
     }
 }