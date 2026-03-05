let currentStep = 1;

function nextStep(from) {
    const valid = from === 1 ? validateStep1() : from === 2 ? validateStep2() : true;
    if (!valid) return;
    currentStep = from + 1;
    updateStepUI(currentStep);
  }
  function prevStep(from) {
    currentStep = from - 1;
    updateStepUI(currentStep);
  }
  function submitForm() {
    if (!validateStep3()) return;
    document.getElementById('panel3').classList.remove('active');
    document.getElementById('successBox').classList.add('show');
    showToast('🎉 Registration successful! Welcome to CampusHire.');
  }