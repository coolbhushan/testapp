package controllers;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.avaje.ebean.Ebean;
import models.TodoList;
import play.*;
import play.mvc.*;
import views.html.*;

public class Application extends Controller {

    public Result index() {
    	
    	List<TodoList> todo = Ebean.find(TodoList.class).findList();
		return ok(views.html.index.render(todo));
    }
    
    public Result markTodo()
    {
    	try{
    	String todoId = request().getQueryString("sql");
		long id = Integer.parseInt(todoId);
		TodoList todo=Ebean.find(TodoList.class).where().eq("id", id).findUnique();	
		boolean flag=todo.getStatus();
		if(flag)
		todo.setStatus(false);
		else
			todo.setStatus(true);
		todo.save();
		return ok(""+todo.getStatus());
		}
    		catch(Exception e)
		{
			e.getMessage();
			e.printStackTrace();
		}

    	return ok("failed");
    }
    
    public Result saveEdit() 
    {
    	try 
    	{
    	String[] label = request().body().asFormUrlEncoded().get("todoLabel");
		String[] dueDate = request().body().asFormUrlEncoded().get("dueDate");
		String[] id = request().body().asFormUrlEncoded().get("hid");
		long editid=Long.parseLong(id[0]);
		TodoList todo=Ebean.find(TodoList.class).where().eq("id", editid).findUnique();
		Logger.info(""+id[0]);
		java.util.Date date1 ;
		try{
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        date1 = sdf.parse(dueDate[0]);
    	
		}catch(ParseException ex )
		{
			SimpleDateFormat sdf1 = new SimpleDateFormat("EEE MMM d HH:mm:ss z yyyy");
			date1=sdf1.parse(dueDate[0].trim());
		}
        todo.setTodoLabel(label[0]);
    	todo.setDueDate(date1);
        todo.save();
    	}catch(Exception e)
    	{
    		Logger.error(e.getLocalizedMessage());
    	}
    	
    	return redirect(routes.Application.index());
    }
    
public  Result addTodo() {
		
		try{
		String[] label = request().body().asFormUrlEncoded().get("todoLabel");
		String[] dueDate = request().body().asFormUrlEncoded().get("dueDate");
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        java.util.Date date1 = sdf.parse(dueDate[0]);
        Date date = new Date();
        TodoList todo=new TodoList();
		todo.setTodoLabel(label[0]);
		todo.setCreationDate(date);
		todo.setDueDate(date1);
		todo.setStatus(false);

		todo.save();
		}catch(Exception e)
		{
			e.getMessage();
			e.printStackTrace();
		}

		return redirect(routes.Application.index());
	}
	
	
public  Result deleteTodo() {
		
		try{
				
		
		String todoId = request().getQueryString("sql");
		long id = Integer.parseInt(todoId);
		TodoList todo=Ebean.find(TodoList.class).where().eq("id", id).findUnique();	
		todo.delete();
		return ok("Successfully Deleted");
		}catch(Exception e)
		{
			e.getMessage();
			e.printStackTrace();
		}

		return redirect(routes.Application.index());
	}
    
  
}
