/**
 ***Get Form Data
 ********************************
 * @param MyParams the parameters
 * @param args the arguments
 */
const memberForm = document.querySelector(".team-member-form");
const member_space = document.querySelector(".member-space");

memberForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let name = this.querySelector('input[name="name"]');
	let photo = this.querySelector('input[name="photo"]');
	let gender = this.querySelector('input[name="gender"]:checked');
	let skill = this.querySelectorAll('input[name="skill"]:checked');
	let skillArray = [];
	for (let i = 0; i < skill.length; i++) {
		skillArray.push(skill[i].value);
	}

	let dataArray;
	if (dataGet("member")) {
		dataArray = dataGet("member");
	} else {
		dataArray = [];
	}
	dataArray.push({
		name: name.value,
		photo: photo.value,
		gender: gender.value,
		skill: skillArray,
	});

	dataSend("member", dataArray);
	teamMember();
	memberForm.reset();
});

teamMember();
function teamMember() {
	let teamData = dataGet("member");
	let data = "";
	teamData.map((item) => {
		let skills = "";
		let skilll = item.skill;
		skilll.map((item) => {
			skills += `<li class="list-group-item my-1">` + item + `</li>`;
		});

		data += `
								<div class="col-12 col-md-6 col-lg-4 my-1">
									<div class="member">
										<div class="card text-center">
											<img
												src="${item.photo}"
												class="card-img-top"
												alt="..." />
											<div class="card-body">
												<h5 class="card-title">${item.name}</h5>
												<p class="card-text">Gender: ${item.gender}</p>
												<ul class="list-group">
													${skills}
													
												</ul>
												<a href="#" class="btn btn-info"
													><i
														class="fa fa-eye text-light"
														aria-hidden="true"></i
												></a>
											</div>
										</div>
									</div>
								</div>
		
		`;
	});
	member_space.innerHTML = data;
}
