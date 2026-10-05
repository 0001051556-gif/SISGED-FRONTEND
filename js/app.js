// SISGED - modo demonstração front-end
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('modoEscuro') === 'ativado') document.body.classList.add('modo-escuro');
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let msg = form.querySelector('.mensagem, .alerta, [aria-live]');
      if (!msg) { msg=document.createElement('div'); msg.className='mensagem'; form.appendChild(msg); }
      msg.innerHTML='<span style="color:#35a936;font-weight:bold;">Operação simulada com sucesso. Este MVP é somente front-end.</span>';
    });
  });
  const login=document.getElementById('form-login');
  if(login){ login.addEventListener('submit',e=>{ e.preventDefault(); localStorage.setItem('sisgedUsuario','Usuário demonstrativo'); localStorage.setItem('sisgedStatus','oficial'); window.location.href='pages/PaginaInicial.html'; }); }
  const dark=document.getElementById('btn-modo-escuro');
  if(dark) dark.addEventListener('click',()=>{document.body.classList.toggle('modo-escuro'); localStorage.setItem('modoEscuro',document.body.classList.contains('modo-escuro')?'ativado':'desativado');});
  document.querySelectorAll('a[href$="logout.html"]').forEach(a=>a.addEventListener('click',()=>{localStorage.removeItem('sisgedUsuario');}));
});
