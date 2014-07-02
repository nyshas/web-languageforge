<?php

require_once(dirname(__FILE__) . '/../../TestConfig.php');
require_once(SimpleTestPath . 'autorun.php');

class AllScriptureforgeDtoTests extends TestSuite {
	
    function __construct() {
        parent::__construct();
 		$this->addFile(TestPath . 'scriptureforge/dto/ActivityDto_Test.php');
		$this->addFile(TestPath . 'scriptureforge/dto/ProjectPageDto_Test.php');
		$this->addFile(TestPath . 'scriptureforge/dto/QuestionListDto_Test.php');
 		$this->addFile(TestPath . 'scriptureforge/dto/QuestionCommentDto_Test.php');
        $this->addFile(TestPath . 'scriptureforge/dto/ProjectSettingsDto_Test.php');
        $this->addFile(TestPath . 'scriptureforge/dto/TextSettingsDto_Test.php');
		$this->addFile(TestPath . 'scriptureforge/dto/UsxHelper_Test.php');
		$this->addFile(TestPath . 'scriptureforge/dto/UsxTrimHelper_Test.php');
    }

}

?>