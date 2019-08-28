$(function() {
	$('.solution-request').click(function(e) {
		e.preventDefault();
		var ok = confirm('풀이 요청할까요?');
		if (ok) {
			var username = $('meta[name="username"]').attr("content");
			var problem = $('meta[name="problem-id"]').attr("content");
			if (username && username.length > 0) {
				$.ajax({
					type: "POST",
					url: "/problem/solution/request",
					data: {
						problem_id: problem
					}
				}).done(function() {
					new Noty({text: '풀이 요청 되었습니다', type: 'success', layout: 'top'}).show();
				});
			} else {
				document.location.href = "/login?next="+encodeURIComponent(window.location.pathname);
			}
		}
	});
});
