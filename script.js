new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ['trang1', 'trang2', 'trang3', 'trang4','trang5'],
  menu: '#menu',
   scrollOverflow: 800, // Nếu nội dung dài thì nó tự scroll trong 1 trang
  afterLoad: function(origin, destination, direction){
      let flower = document.getElementById('flower');

      // Cập nhật menu active
      let menuItems = document.querySelectorAll('#menu li');
      menuItems.forEach(item => item.classList.remove('active'));
      menuItems[destination.index].classList.add('active');
     
  }
});

const descriptions = document.querySelectorAll('.about-description');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // khi thấy thì thêm hiệu ứng
      } else {
        entry.target.classList.remove('active'); // khi mất đi thì gỡ hiệu ứng
      }
    });
  }, {
    threshold: 0.1 // phần tử lộ ra 10% là kích hoạt
  });

  descriptions.forEach(desc => {
    observer.observe(desc);
  });

  const rightParagraphs = document.querySelectorAll('.right p');

  const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  rightParagraphs.forEach(p => {
    observerRight.observe(p);
  });
  
  const typewriter = document.getElementById('typewriter');
  const text = ["HI !\nMY NICK\nNAME'S\nKhong Biet Code","MY\nNAME'S\nTIN TO"];
  let line = 0;
  let index = 0;
  let currentText = "";

  function type() {
    if (line < text.length) {
      currentText = text[line].substring(0, index + 1);
      typewriter.innerText = currentText;

      if (index < text[line].length) {
        index++;
        setTimeout(type, 100);
      } else {
        if (line === 0) {
          setTimeout(() => {
            deleteText();
          }, 1000);
        } else {
          return;
        }
      }
    }
  }

  function deleteText() {
    if (index > 0) {
      currentText = text[line].substring(0, index - 1);
      typewriter.innerText = currentText;
      index--;
      setTimeout(deleteText, 100);
    } else {
      line++;
      if (line === text.length) {
        typewriter.innerText = text[1]; 
        return;
      }
      index = 0;
      setTimeout(type, 500);
    }
  }

  window.onload = function() {
    type();
  };

  window.onscroll = function() {
    line = 0;
    index = 0;
    typewriter.innerText = "";
    type();
  };
 
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const target = button.getAttribute('data-target');
    if (target === "tech-stack") {
      document.getElementById('tech-stack').style.display = 'grid';
      document.getElementById('tools').style.display = 'none';
    } else {
      document.getElementById('tech-stack').style.display = 'none';
      document.getElementById('tools').style.display = 'grid';
    }
  });
});

const texts = "I have strong teamwork, time management, and task management skills. I am responsible, self-disciplined, and persistent in my work.";
let i = 0;
let isDeleting = false;

function typeWriter() {
  const element = document.getElementById('subtitle');

  if (!isDeleting) {
    // Gõ từng ký tự
    element.innerHTML = texts.substring(0, i + 1);
    i++;
    if (i === texts.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2500); // Dừng lại 1.5s trước khi xóa
      return;
    }
  } else {
    // Xóa từng ký tự
    element.innerHTML = texts.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeWriter, isDeleting ? 30 : 100); // tốc độ xóa nhanh hơn gõ
}

typeWriter();


