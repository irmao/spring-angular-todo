package poc.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Represents an user
 * 
 * @author vinicius.dias
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "POC_USER")
public class User implements Serializable {
	/**
	 * The id
	 */
	@Id
	private Long id;

	/**
	 * The user name
	 */
	@Column
	private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
