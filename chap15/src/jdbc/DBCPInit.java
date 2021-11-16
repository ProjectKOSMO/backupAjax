package jdbc;
import java.sql.DriverManager;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.commons.dbcp2.BasicDataSourceFactory;
import org.apache.commons.dbcp2.ConnectionFactory;
import org.apache.commons.dbcp2.DriverManagerConnectionFactory;

import org.apache.commons.dbcp2.PoolableConnection;
import org.apache.commons.dbcp2.PoolableConnectionFactory;
import org.apache.commons.dbcp2.PoolingDriver;
import org.apache.commons.pool2.ObjectPool;
import org.apache.commons.pool2.impl.GenericObjectPool;
import org.apache.commons.pool2.impl.GenericObjectPoolConfig;

public class DBCPInit  extends HttpServlet{

	@Override
	public void init() throws ServletException{
		loadJDBCDriver();
		initConnectionPool();
	}
	
	private void loadJDBCDriver() {
		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
		}catch(ClassNotFoundException ex) {
			throw new RuntimeException("fail to load JDBC Driver", ex);
		}
	}
	
	private void initConnectionPool() {
		try {
			String jdbcUrl="jdbc:oracle:thin:@localhost:1521:xe";
			String username = "hr";
			String pw = "hr";
			
			//실제 커넥션을 생성할 ConnectionFactory를 생성한다.
			ConnectionFactory connFactory = 
				new DriverManagerConnectionFactory(jdbcUrl, username, pw);
			
			//PoolableConnectionFactory를 생성해서 커넥션풀로 사용할 poolableConnection 생성
			PoolableConnectionFactory poolableConnFactory =
					new PoolableConnectionFactory(connFactory, null);
			poolableConnFactory.setValidationQuery("select 1");

			//커넥션 풀의 설정 정보 저장
			GenericObjectPoolConfig poolConfig = new GenericObjectPoolConfig();
			poolConfig.setTimeBetweenEvictionRunsMillis(1000L * 60L * 5L); //유휴 커넥션 검사 주기
			poolConfig.setTestWhileIdle(true); //풀에 보관중인 커넥션이 유효한지 검사할지 여부
			poolConfig.setMinIdle(4); //커넥션 최소 개수
			poolConfig.setMaxTotal(50); //커넥션 최대 개수

			//커넥션풀 생성
			GenericObjectPool<PoolableConnection> connectionPool =
					new GenericObjectPool<> (poolableConnFactory, poolConfig);
			poolableConnFactory.setPool(connectionPool);
			
			//커넥션풀을 사용할 JDBC 드라이버를 등록
			Class.forName("org.apache.commons.dbcp2.PoolingDriver");
			PoolingDriver driver = (PoolingDriver)DriverManager.getDriver("jdbc:apache:commons:dbcp:");
			
			driver.registerPool("guestbook", connectionPool);				
			
		} catch(Exception e) {
			throw new RuntimeException(e);
		}

		
	}
	
}
