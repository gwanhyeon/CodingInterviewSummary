var OnlineJudgeCodeMirror = function() {
	var codeMirrors = [];
	var codeMirrorDict = {};
	function setupCodeMirror(textarea, theme, mime) {
		var name = textarea.name;
		var readonly = textarea.hasAttribute('readonly');
		var wrap = false;
		if (textarea.dataset && textarea.dataset.wrap) {
			wrap = (textarea.dataset.wrap === 'true');
		}
		var codeMirror = CodeMirror.fromTextArea(textarea, {
			lineNumbers: true,
			matchBrackets: true,
			indentUnit: 4,
			autoCloseBrackets: true,
			styleActiveLine: true,
			lineWrapping: wrap,
			readOnly: readonly
		});
		codeMirrors.push(codeMirror);
		if (name) {
			codeMirrorDict[name] = codeMirror;
		}
		codeMirror.setOption('extraKeys', {
			Tab: function(cm) {
				var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
				cm.replaceSelection(spaces);
			},
			'Ctrl-Enter': function() {
				$('form.submit-form').submit();
			},
			'Cmd-Enter': function() {
				$('form.submit-form').submit();
			},
		});
		changeMode(codeMirror, mime);
		changeTheme(codeMirror, theme);
	}
	var changeTheme = function(codeMirror, theme) {
		codeMirror.setOption('theme', theme);
	};
	var changeMode = function(codeMirror, mime) {
		var mode, spec;
		var info = CodeMirror.findModeByMIME(mime);
		if (info) {
			mode = info.mode;
		} else {
			mime = 'text/plain';
			mode = CodeMirror.findModeByMIME(mime).mode;
		}
		if (mime == 'text/plain') {
			codeMirror.setOption('indentUnit', 0);
		} else {
			codeMirror.setOption('indentUnit', 4);
		}
		codeMirror.setOption('mode',mime);
		CodeMirror.autoLoadMode(codeMirror, mode);
	};
	return {
		init: function(theme, mime) {
			CodeMirror.modeURL = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.35.0/mode/%N/%N.js";
			$('.codemirror-textarea').each(function() {
				setupCodeMirror($(this).get(0), theme, (mime || $(this).attr('data-mime') || 'text/x-csrc'));
			});
		},
		changeTheme: function(theme) {
			codeMirrors.forEach(function(codeMirror) {
				if (codeMirror.getOption('readOnly')) return;
				changeTheme(codeMirror, theme);
			});
		},
		changeMode: function(mime) {
			codeMirrors.forEach(function(codeMirror) {
				if (codeMirror.getOption('readOnly')) return;
				changeMode(codeMirror, mime);
			});
		},
		changeModeOne: function(name, mime) {
			var codeMirror = codeMirrorDict[name];
			if (codeMirror) {
				changeMode(codeMirror, mime);
			}
		},
		refresh: function() {
			codeMirrors.forEach(function(codeMirror) {
				if (codeMirror.getOption('readOnly')) return;
				codeMirror.refresh();
			});
		},
		save: function() {
			codeMirrors.forEach(function(codeMirror) {
				codeMirror.save();
			});
		},
		get: function(name) {
			var codeMirror = codeMirrorDict[name];
			return codeMirror;
		},
		set: function(name, content) {
			var codeMirror = codeMirrorDict[name];
			if (codeMirror) {
				codeMirror.setValue(content);
			}
		},
		addLineWidget: function(name, line, message) {
			var codeMirror = codeMirrorDict[name];
			if (codeMirror) {
				codeMirror.addLineWidget(line, message);
			}
		},
	};
}();
