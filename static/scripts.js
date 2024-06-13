document.getElementById('addEducationBtn').addEventListener('click', function() {
    const educationContainer = document.getElementById('educationContainer');
    const educationCount = educationContainer.querySelectorAll('.education-block').length;
    const newEducationIndex = educationCount + 1;

    const newEducationBlock = document.createElement('div');
    newEducationBlock.classList.add('education-block', 'mb-4');

    // College input
    const collegeLabel = document.createElement('label');
    collegeLabel.htmlFor = `college${newEducationIndex}`;
    collegeLabel.classList.add('form-label', 'sub-label');
    collegeLabel.textContent = 'College:';
    newEducationBlock.appendChild(collegeLabel);

    const collegeDiv = document.createElement('div');
    collegeDiv.classList.add('mb-2', 'input-group');

    const collegeSpan = document.createElement('span');
    collegeSpan.classList.add('input-group-text');
    collegeSpan.innerHTML = '<i class="bi bi-building"></i>';

    const collegeInput = document.createElement('input');
    collegeInput.type = 'text';
    collegeInput.classList.add('form-control');
    collegeInput.id = `college${newEducationIndex}`;
    collegeInput.name = `college${newEducationIndex}`;
    collegeInput.placeholder = 'College Name';

    collegeDiv.appendChild(collegeSpan);
    collegeDiv.appendChild(collegeInput);
    newEducationBlock.appendChild(collegeDiv);

    // Degree input
    const degreeLabel = document.createElement('label');
    degreeLabel.htmlFor = `degree${newEducationIndex}`;
    degreeLabel.classList.add('form-label', 'sub-label');
    degreeLabel.textContent = 'Degree:';
    newEducationBlock.appendChild(degreeLabel);

    const degreeDiv = document.createElement('div');
    degreeDiv.classList.add('mb-2', 'input-group');

    const degreeSpan = document.createElement('span');
    degreeSpan.classList.add('input-group-text');
    degreeSpan.innerHTML = '<i class="bi bi-book"></i>';

    const degreeInput = document.createElement('input');
    degreeInput.type = 'text';
    degreeInput.classList.add('form-control');
    degreeInput.id = `degree${newEducationIndex}`;
    degreeInput.name = `degree${newEducationIndex}`;
    degreeInput.placeholder = 'Degree';

    degreeDiv.appendChild(degreeSpan);
    degreeDiv.appendChild(degreeInput);
    newEducationBlock.appendChild(degreeDiv);

    // Completion Date input
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = `date${newEducationIndex}`;
    dateLabel.classList.add('form-label', 'sub-label');
    dateLabel.textContent = 'Completion Date:';
    newEducationBlock.appendChild(dateLabel);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('mb-2', 'input-group');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('input-group-text');
    dateSpan.innerHTML = '<i class="bi bi-calendar"></i>';

    const dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.classList.add('form-control');
    dateInput.id = `date${newEducationIndex}`;
    dateInput.name = `date${newEducationIndex}`;
    dateInput.placeholder = 'Completion Date';

    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(dateInput);
    newEducationBlock.appendChild(dateDiv);

    // Education Description input
    const educationDescriptionLabel = document.createElement('label');
    educationDescriptionLabel.htmlFor = `educationDescription${newEducationIndex}`;
    educationDescriptionLabel.classList.add('form-label', 'sub-label');
    educationDescriptionLabel.textContent = 'Description:';
    newEducationBlock.appendChild(educationDescriptionLabel);

    const educationDescriptionDiv = document.createElement('div');
    educationDescriptionDiv.classList.add('mb-2', 'input-group');

    const educationDescriptionSpan = document.createElement('span');
    educationDescriptionSpan.classList.add('input-group-text');
    educationDescriptionSpan.innerHTML = '<i class="bi bi-file-earmark-text"></i>';

    const educationDescriptionInput = document.createElement('textarea');
    educationDescriptionInput.classList.add('form-control');
    educationDescriptionInput.id = `educationDescription${newEducationIndex}`;
    educationDescriptionInput.name = `educationDescription${newEducationIndex}`;
    educationDescriptionInput.rows = 3;
    educationDescriptionInput.placeholder = 'Describe your achievements';

    educationDescriptionDiv.appendChild(educationDescriptionSpan);
    educationDescriptionDiv.appendChild(educationDescriptionInput);
    newEducationBlock.appendChild(educationDescriptionDiv);

    educationContainer.appendChild(newEducationBlock);
});

document.getElementById('addWorkBtn').addEventListener('click', function() {
    const workContainer = document.getElementById('workContainer');
    const workCount = workContainer.querySelectorAll('.work-block').length;
    const newWorkIndex = workCount + 1;

    const newWorkBlock = document.createElement('div');
    newWorkBlock.classList.add('work-block', 'mb-4');

    // Organization/Project input
    const organizationLabel = document.createElement('label');
    organizationLabel.htmlFor = `organization${newWorkIndex}`;
    organizationLabel.classList.add('form-label', 'sub-label');
    organizationLabel.textContent = 'Organization/Project:';
    newWorkBlock.appendChild(organizationLabel);

    const organizationDiv = document.createElement('div');
    organizationDiv.classList.add('mb-2', 'input-group');

    const organizationSpan = document.createElement('span');
    organizationSpan.classList.add('input-group-text');
    organizationSpan.innerHTML = '<i class="bi bi-building"></i>';

    const organizationInput = document.createElement('input');
    organizationInput.type = 'text';
    organizationInput.classList.add('form-control');
    organizationInput.id = `organization${newWorkIndex}`;
    organizationInput.name = `organization${newWorkIndex}`;
    organizationInput.placeholder = 'e.g. ABC Corp, Personal Project';

    organizationDiv.appendChild(organizationSpan);
    organizationDiv.appendChild(organizationInput);
    newWorkBlock.appendChild(organizationDiv);

    // Position input
    const positionLabel = document.createElement('label');
    positionLabel.htmlFor = `position${newWorkIndex}`;
    positionLabel.classList.add('form-label', 'sub-label');
    positionLabel.textContent = 'Position:';
    newWorkBlock.appendChild(positionLabel);

    const positionDiv = document.createElement('div');
    positionDiv.classList.add('mb-2', 'input-group');

    const positionSpan = document.createElement('span');
    positionSpan.classList.add('input-group-text');
    positionSpan.innerHTML = '<i class="bi bi-book"></i>';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.classList.add('form-control');
    positionInput.id = `position${newWorkIndex}`;
    positionInput.name = `position${newWorkIndex}`;
    positionInput.placeholder = 'e.g. Software Analyst or Volunteer';

    positionDiv.appendChild(positionSpan);
    positionDiv.appendChild(positionInput);
    newWorkBlock.appendChild(positionDiv);

    // Date input
    const workDateLabel = document.createElement('label');
    workDateLabel.htmlFor = `workDate${newWorkIndex}`;
    workDateLabel.classList.add('form-label', 'sub-label');
    workDateLabel.textContent = 'Date:';
    newWorkBlock.appendChild(workDateLabel);

    const workDateDiv = document.createElement('div');
    workDateDiv.classList.add('mb-2', 'input-group');

    const workDateSpan = document.createElement('span');
    workDateSpan.classList.add('input-group-text');
    workDateSpan.innerHTML = '<i class="bi bi-calendar"></i>';

    const workDateInput = document.createElement('input');
    workDateInput.type = 'text';
    workDateInput.classList.add('form-control');
    workDateInput.id = `workDate${newWorkIndex}`;
    workDateInput.name = `workDate${newWorkIndex}`;
    workDateInput.placeholder = 'e.g. 2018-Present';

    workDateDiv.appendChild(workDateSpan);
    workDateDiv.appendChild(workDateInput);
    newWorkBlock.appendChild(workDateDiv);

    // Description input
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = `description${newWorkIndex}`;
    descriptionLabel.classList.add('form-label', 'sub-label');
    descriptionLabel.textContent = 'Description:';
    newWorkBlock.appendChild(descriptionLabel);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('mb-2', 'input-group');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('input-group-text');
    descriptionSpan.innerHTML = '<i class="bi bi-file-earmark-text"></i>';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('form-control');
    descriptionInput.id = `description${newWorkIndex}`;
    descriptionInput.name = `description${newWorkIndex}`;
    descriptionInput.rows = 3;
    descriptionInput.placeholder = 'Describe your role and achievements';

    descriptionDiv.appendChild(descriptionSpan);
    descriptionDiv.appendChild(descriptionInput);
    newWorkBlock.appendChild(descriptionDiv);

    workContainer.appendChild(newWorkBlock);
});
