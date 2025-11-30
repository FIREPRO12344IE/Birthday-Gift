document.addEventListener('DOMContentLoaded', function() {
   const audio = document.getElementById('birthdayAudio');
   audio.play().catch(() => {
      document.body.addEventListener('click', () => {
         audio.play();
      }, { once: true });
   });

   const photoUploadArea = document.getElementById('photoUploadArea');
   const pictureInput = document.getElementById('pictureInput');
   const uploadPlaceholder = document.getElementById('uploadPlaceholder');
   const birthdayImage = document.getElementById('birthdayImage');

   photoUploadArea.addEventListener('click', function() {
      pictureInput.click();
   });

   pictureInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = function(event) {
            birthdayImage.src = event.target.result;
            uploadPlaceholder.style.display = 'none';
            birthdayImage.style.display = 'block';
         };
         reader.readAsDataURL(file);
      }
   });
});
