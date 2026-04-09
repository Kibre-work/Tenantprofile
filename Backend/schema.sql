CREATE TABLE tenants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  photo VARCHAR(255),
  tenancy_score DECIMAL(3,1)
);

CREATE TABLE rental_history (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tenant_id INT NOT NULL,
  period VARCHAR(100),
  address VARCHAR(255),
  country VARCHAR(100),
  duration VARCHAR(50),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);

CREATE TABLE tenancy_ratings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tenant_id INT NOT NULL,
  date DATE,
  address VARCHAR(255),
  score DECIMAL(3,1),
  label VARCHAR(50),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);