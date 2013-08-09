'use strict';

// Declare app level module which depends on filters, and services
angular.module('activity', 
		[
		 'sf.services',
		 'ui.bootstrap',
		 'activity.filters'
		])
	.controller('ActivityCtrl', ['$scope', 'activityPageService', 'linkService', function($scope, activityService, linkService) {
		
		function decodeActivityList(items) {
			for (var i =0; i < items.length; i++) {
				if ('userRef' in items[i]) {
					items[i].userProfileHref = linkService.user(items[i].userRef.id);
				}
				if ('projectRef' in items[i]) {
					items[i].projectHref = linkService.project(items[i].projectRef);
				}
				if ('textRef' in items[i]) {
					items[i].textHref = linkService.text(items[i].projectRef, items[i].textRef);
				}
				if ('questionRef' in items[i]) {
					items[i].questionHref = linkService.question(items[i].projectRef, items[i].textRef, items[i].questionRef);				}
			}
		}
		
		$scope.activities = [
			{
				'type': 'global',
				'action': 'message',
				'date': 1375947520,
				'content': {
					'message': 'Notice: scriptureforge.org will be unavailable Sunday morning for routine server maintenance'
				}
			},
			{
				'type': 'project',
				'action': 'add_question',
				'date': 1375946810,
				'userRef': '',
				'projectRef': '123445',
				'textRef': '12345',
				'questionRef':'12345',
				'content': {
					'project':'Northern Thai',
					'text':'Psalm 56',
					'question':'What is the perceived tone of this chapter?'
				}
			},
			{
				'type': 'project',
				'action': 'add_text',
				'date': 1375945810,
				'userRef': '',
				'projectRef': '123445',
				'textRef': '12345',
				'questionRef':'',
				'content': {
					'project':'Island Creole',
					'text':'Revelation 1'
				}
			},
			{
				'type': 'project',
				'action': 'add_comment',
				'date': 1375944400,
				'userRef': {
					'id': '123345',
					'avatar_ref': '/images/avatar/HotPink-frog-128x128.png',
					'username': 'Jon'
				},
				'userRef2': {
					'id': '123345',
					'avatar_ref': '/images/avatar/anonymoose.png',
					'username': 'Chris'
				},
				'projectRef': '123445',
				'textRef': '12345',
				'questionRef':'12345',
				'content': {
					'project':'Jamaican Scripture',
					'text':'Psalm 109',
					'question': 'Please comment on the use of the word "man"',
					'answer':'The word "man" is used too often in this context',
					'comment': 'I agree',
				}
			},
			{
				'type': 'project',
				'action': 'add_answer',
				'date': 1375943400,
				'userRef': {
					'id': '123345',
					'avatar_ref': '/images/avatar/chocolate4-cow-128x128.png',
					'username': 'James'
				},
				'projectRef': '123445',
				'textRef': '12345',
				'questionRef':'12345',
				'content': {
					'project':'Jamaican Scripture',
					'text':'Psalm 109',
					'question': 'Please comment on the use of the word "man"',
					'answer':'The word "man" is used too often in this context',
					'comment': 'I agree',
				}
			},
			{
				'type': 'project',
				'action': 'increase_score',
				'filter': 'me',
				'date': 1375942526,
				'userRef': {
					'id': '123345',
					'avatar_ref': '/images/avatar/LightYellow-gorilla-128x128.png',
					'username': 'Joshua'
				},
				'projectRef': '123445',
				'textRef': '12345',
				'questionRef':'12345',
				'content': {
					'project':'Jamaican Scripture',
					'text':'Psalm 109',
					'question': 'Please comment on the use of the word "man"',
					'answer':'The word "man" is used too often in this context',
				}
			}
		];
		decodeActivityList($scope.activities);
		/*
		activityService.list_activity(0, 50, function(result) {
			if (result.ok) {
				$scope.activities = result.data.entries;
				this.decodeActivityList($scope.activities);
			} else {
				// error condition
				console.log("error loading activity")
			}
		});
		*/
		
		
		$scope.filterAllActivity = function() {
			console.log("filterAllActivity()");
			
		};
		
		$scope.filterMyActivity = function() {
			console.log("filterMyActivity()");
			
		};
	}])
	;
