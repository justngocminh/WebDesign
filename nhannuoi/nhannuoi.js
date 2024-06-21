function goToPage(page) {
    var currentPage = parseInt(document.querySelector('.page-link.active').textContent);
    var totalPages = 6; // Tổng số trang

    if (page === 'previous') {
        if (currentPage > 1) {
            currentPage -= 1;
        }
    } else if (page === 'next') {
        if (currentPage < totalPages) {
            currentPage += 1;
        }
    } else {
        currentPage = page;
    }

    var url = (currentPage === 1) ? 'nhannuoi.html' : 'nhannuoi' + currentPage + '.html';
    url += '#row-adapt'; // Thêm đoạn neo vào URL
    window.location.href = url; // Điều hướng đến URL đó
}

document.addEventListener('DOMContentLoaded', function() {
    var pageLinks = document.querySelectorAll('.page-link');
    var currentPage = 1; // Mặc định là trang đầu tiên
    var previousItem = document.querySelector('.previous-item');
    var urlParts = window.location.href.split('nhannuoi');
    if (urlParts[1]) {
        var pagePart = urlParts[1].match(/\d+/);
        if (pagePart) {
            currentPage = parseInt(pagePart[0]);
        }
    }
    pageLinks.forEach(function(link) {
        link.classList.remove('active');
        if (parseInt(link.textContent) === currentPage) {
            link.classList.add('active');
        }
    })
    if (currentPage === 1) {
            previousItem.classList.add('disabled');
    } else {
            previousItem.classList.remove('disabled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash === '#row-adapt') {
      // Tìm phần tử có class 'row-adapt' và cuộn đến đó
      const targetElement = document.querySelector('.row-adapt');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Thêm lớp 'visible' sau một khoảng thời gian để kích hoạt hiệu ứng
        setTimeout(() => {
          targetElement.classList.add('visible');
        }, 500); // Delay 500ms to ensure smooth scroll ends before animation starts
      }
    }
  });

// Hiển thị các trang con

  function showAnimals(animalType) {
  const animals = document.querySelectorAll('.animal');
  // Ẩn tất cả các thẻ animal và loại bỏ khoảng trống
  animals.forEach(animal => {
    animal.style.display = 'none';
    animal.style.margin = '0';
    animal.style.padding = '0';
  });
  const rowAdaptDiv = document.querySelector('.row-adapt'); // Khai báo rowAdaptDiv trước khi sử dụng
  const noResult = document.querySelector('.no-result'); // Sử dụng querySelector để lấy phần tử đầu tiên
  const noPage = document.querySelector('.pages'); // Sử dụng querySelector để lấy phần tử đầu tiên
  if (animalType === 'other') {
    rowAdaptDiv.style.height = '200px';
    rowAdaptDiv.style.display = 'none';
    if (noResult) {
      noResult.style.display = 'block';
    }
    if (noPage) {
      noPage.style.display = 'none';
    }
  }
  if (animalType === 'all') {
    animals.forEach(animal => {
      animal.style.display = 'block';
      setTimeout(() => {
        animal.style.opacity = '1'; // Hiển thị từ từ
      }, 50); // Delay 50ms trước khi áp dụng hiệu ứng
    });
  } else {
    const selectedAnimals = document.querySelectorAll('.animal.' + animalType);
    selectedAnimals.forEach(animal => {
      animal.style.display = 'block';
      setTimeout(() => {
        animal.style.opacity = '1'; // Hiển thị từ từ
      }, 50); // Delay 50ms trước khi áp dụng hiệu ứng
    });
  }
      if (animalType === 'dog') {
        rowAdaptDiv.style.height = '455px'; 
      } else {
        rowAdaptDiv.style.height = '1370.2px'; 
      }
  // Load lại trang và trượt xuống đến phần tử .animal của loại động vật đã chọn
  const hash = '#' + animalType; // Tạo hash tương ứng với loại động vật
  window.location.hash = hash; // Thiết lập hash vào URL

  setTimeout(() => {
    const element = document.querySelector('.animal.' + animalType);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500); // Delay 500ms để đảm bảo load lại trang xong trước khi trượt xuống
}

// Xử lý load lại trang khi có hash trong URL
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const animalType = hash.slice(1); // Lấy loại động vật từ hash
    showAnimals(animalType); // Hiển thị loại động vật tương ứng
  }
});


  
