package models;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;

@SuppressWarnings("deprecation")
@Entity
@Table(name="todo")
public class TodoList extends Model {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name = "todo_label")
	private String todoLabel;
	
	@Column(name = "creation_date")
	private Date creationDate;
	 
	@Column(name = "due_date")
	private Date dueDate;
	
	private boolean status;
	
	 
	 public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTodoLabel() {
		return todoLabel;
	}


	public void setTodoLabel(String todoLabel) {
		this.todoLabel = todoLabel;
	}


	public Date getCreationDate() {
		return creationDate;
	}


	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	
	
	public Date getDueDate() {
		return dueDate;
	}


	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	

	public boolean getStatus() {
		return status;
	}


	public void setStatus(boolean status) {
		this.status = status;
	}
	
	
	

	public static Finder<Long,TodoList> find = new Finder<Long, TodoList>(Long.class, TodoList.class);
}
