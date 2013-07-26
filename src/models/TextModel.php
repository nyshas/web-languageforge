<?php

namespace models;

require_once(APPPATH . '/models/ProjectModel.php');

class TextModelMongoMapper extends \libraries\sf\MongoMapper
{
	/**
	 * @var TextModelMongoMapper[]
	 */
	private static $_pool = array();
	
	/**
	 * @param string $databaseName
	 * @return TextModelMongoMapper
	 */
	public static function connect($databaseName) {
		if (!isset(static::$_pool[$databaseName])) {
			static::$_pool[$databaseName] = new TextModelMongoMapper($databaseName, 'texts');
		}
		return static::$_pool[$databaseName];
	}
	
}

class TextModel extends \libraries\sf\MapperModel
{
	/**
	 * @var ProjectModel;
	 */
	private $_projectModel;
	
	public function __construct($projectModel, $id = NULL)
	{
		$this->_projectModel = $projectModel;
		$databaseName = $projectModel->databaseName();
		parent::__construct(TextModelMongoMapper::connect($databaseName), $id);
	}

	public static function remove($databaseName, $id) {
		TextModelMongoMapper::connect($databaseName)->remove($id);
	}

	public function listQuestions() {
		$questionList = new QuestionListTextsModel($this->_mapper->databaseName(), $this->id);
		$questionList->read();
		return $questionList;
	}
	
	public $id;
	
	public $title;
	
	public $content;
	
}

class TextListModel extends \libraries\sf\MapperListModel
{

	public function __construct($projectModel)
	{
		parent::__construct(
			TextModelMongoMapper::connect($projectModel->databaseName()),
			array('title' => array('$regex' => '')),
			array('title')
		);
	}
	
}

?>