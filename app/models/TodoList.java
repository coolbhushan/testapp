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
	
	
	public String todoLabel;
	
	public Date creationDate;
	 
	public Date dueDate;
	
	public boolean status;

	public static Finder<Long,TodoList> find = new Finder<Long, TodoList>(Long.class, TodoList.class);
}
