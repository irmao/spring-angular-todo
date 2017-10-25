package poc.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * Represents a task
 * 
 * @author vinicius.dias
 *
 */
@Entity
@Table(name = "POC_TASK")
public class Task {
	/**
	 * The id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "POC_TASK_SEQ")
	@SequenceGenerator(sequenceName = "POC_TASK_SEQ", name = "POC_TASK_SEQ", allocationSize = 1)
	private Long id;

	/**
	 * The user assigned to do the task
	 */
	@JoinColumn
	@ManyToOne(cascade = CascadeType.DETACH)
	private User user;

	/**
	 * The description of the task
	 */
	@Column
	private String description;

	/**
	 * The due date of the task
	 */
	@Column
	private Date dueDate;

	/**
	 * A flag indicating whether the task is done or not
	 */
	@Column
	private Boolean done;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}
}
