<?php
require_once(dirname(__FILE__) . '/../TestConfig.php');
require_once(SimpleTestPath . 'autorun.php');

require_once(TestLibPath . 'jsonRPCClient.php');

class TestUserAPI extends UnitTestCase {

	function __construct() {
	}
	
	function testUserCRUD_CRUDOK() {
		$api = new jsonRPCClient("http://scriptureforge.local/api/sf", false);
		
		// Create
		$param = array(
			'id' => '',
			'username' =>'SomeUser',
			'email' => 'user@example.com'
		);
		$id = $api->user_update($param);
		$this->assertNotNull($id);
		$this->assertEqual(24, strlen($id));
		
		// Read
		$result = $api->user_read($id);
		$this->assertNotNull($result['id']);
		$this->assertEqual('SomeUser', $result['username']);
		$this->assertEqual('user@example.com', $result['email']);
		
		// Update
		$result['email'] = 'other@example.com';
		$id = $api->user_update($result);
		$this->assertNotNull($id);
		$this->assertEqual($result['id'], $id);
		
		// Delete
// 		$result = $api->user_delete($id);
// 		$this->assertTrue($result);
		
		
	}
	
	function testUserList_Ok() {
		$api = new jsonRPCClient("http://scriptureforge.local/api/sf", false);
		$result = $api->user_list();
		
		$this->assertTrue($result['count'] > 0);
		
	}
	
}

?>