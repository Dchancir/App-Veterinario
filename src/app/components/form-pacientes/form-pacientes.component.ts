import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { PacienteService, Paciente } from 'src/app/services/paciente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
  styleUrls: ['./form-pacientes.component.scss']
})
export class FormPacientesComponent implements OnInit {

  public opcionesDuracion:any[] = [
    {text: '', value: ''},
    {text: 'minuto(s)', value: 'minuto(s)'},
    {text: 'hora(s)', value: 'hora(s)'}
  ];

  public opcionesEdad:any[] = [
    {text: '', value: ''},
    {text: 'año(s)', value: 'año(s)'},
    {text: 'mes(es)', value: 'mes(es)'},
    {text: 'día(s', value: 'dia(s)'}
  ];

  public Parametros_Prioridad: any[] = [
    { text: 'Posible fractura', value: 'fractura' },
    { text: 'Sangrado', value: 'sangrado' },
    { text: 'Paciente inconsciente', value: 'inconsciente' },
    { text: 'Inmovilidad', value: 'inmovilidad' },
  ];

  forma: FormGroup;

  edadForm =this.fb.group({
    valor:[null],
    metrica:['']
  },{
    validators: [this.validadores.noCompleto()]
  });

  duracionForm =this.fb.group({
    valor:[null,Validators.required],
    metrica:['',Validators.required]
  },{
    validators: [this.validadores.noCompletoDuracion()]
  });


  id:number;
  isReadOnly:boolean;

  constructor(private fb:FormBuilder, private validadores:ValidadoresService, private pacientesService:PacienteService, private activatedRoute:ActivatedRoute, private router:Router) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.id = params['id'] || null;
      if(this.id !== null){
        const paciente = this.pacientesService.getPaciente(this.id);
        if(this.router.url.indexOf('verPaciente')>=0){
          this.isReadOnly = true;
        }else{
          this.isReadOnly = false;
        }
        this.verPacienteForm(paciente);
      } else {
        this.crearFormularo();
      }
    });
  }

  nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  tipoNoValido(){
    return this.forma.get('tipo')?.invalid && this.forma.get('tipo')?.touched
  }

  edadNoValida(){
    const edad= this.forma.get('edad.valor')?.value;
    const metrica= this.forma.get('edad.metrica')?.value;
    return (edad === null && metrica === "") || (edad !== null && metrica !== "") ?false:true;
  }

  duracionNoValida(){
    const duracion= this.forma.get('duracion.valor');
    const metrica= this.forma.get('duracion.metrica');
    if(duracion?.touched || metrica?.touched){
      return (duracion?.value !== null && metrica?.value !== "")  ? false:true;
    }
    return false;
  }

  getEdadForm(){
    return <FormGroup> this.forma.controls.edad;
  }

  getDuracionForm(){
    return <FormGroup> this.forma.controls.duracion;
  }

  crearFormularo(){
    this.forma = this.fb.group({
      nombre:['',[Validators.required,this.validadores.noCaracteres]],
      gravedad: this.fb.group({}),
      edad: this.edadForm,
      diagnostico:[''],
      peso:[''],
      tipo:['',Validators.required],
      duracion:this.duracionForm
    });
    const gravedad = this.forma.get('gravedad');
    this.Parametros_Prioridad.forEach((option: any) => {
      (<FormGroup>gravedad).addControl(option.value, new FormControl(false));
    });
  }

  verPacienteForm(paciente:any){
    this.forma = this.fb.group({
      nombre:[paciente.nombre,[Validators.required,this.validadores.noCaracteres]],
      gravedad:this.fb.group({}),
      edad: this.fb.group({
        valor: [paciente.edadValor],
        metrica: [paciente.edadMetrica]
      },{
        validators: [this.validadores.noCompleto()]
      }),
      diagnostico:[paciente.diagnostico],
      peso:[paciente.peso],
      tipo:[paciente.tipo,[Validators.required]],
      duracion: this.fb.group({
        valor: [paciente.duracionValor],
        metrica: [paciente.duracionMetrica]
      },{
        validators: [this.validadores.noCompletoDuracion()]
      })
    });
    const gravedad = this.forma.get('gravedad');
    this.Parametros_Prioridad.forEach((option: any) => {
      (<FormGroup>gravedad).addControl(option.value, new FormControl(!!paciente.gravedad[option]));
    });
    /*(<FormGroup>gravedad).addControl('fractura', new FormControl(paciente.gravedad.fractura?true:false));
    (<FormGroup>gravedad).addControl('sangrado', new FormControl(paciente.gravedad.sangrado?true:false));
    (<FormGroup>gravedad).addControl('inconsciente', new FormControl(paciente.gravedad.inconsciente?true:false));
    (<FormGroup>gravedad).addControl('inmovilidad', new FormControl(paciente.gravedad.inmovilidad?true:false));*/
    if(this.isReadOnly){
      this.forma.disable();
    }
  }


  //QUITAR ESTO

  submitForm(){

    if (!this.id) {
      return this.agregarPaciente()
    }

    if(this.isReadOnly){
      return this.editarForm()
    }

    return this.editarPaciente()

  }

  //


  editarForm(){
    this.router.navigate(['/editarPaciente',this.id]);
  }

  editarPaciente(){
    console.log(Object.values(this.forma.value.gravedad))
    const paciente:Paciente = {
      nombre:this.forma.value.nombre,
      diagnostico:this.forma.value.diagnostico,
      fecha:"1/14/2021",
      gravedad:this.forma.value.gravedad,
      prioridad:(Object.values(this.forma.value.gravedad).some(option => option === true))?'Sí':'No',
      edadValor:this.forma.get('edad.valor')?.value,
      edadMetrica:this.forma.get('edad.metrica')?.value,
      duracionValor:this.forma.get('duracion.valor')?.value,
      duracionMetrica:this.forma.get('duracion.metrica')?.value,
      peso:this.forma.get('peso')?.value,
      tipo:this.forma.get('tipo')?.value,
      idx: this.id
    }
    this.pacientesService.editarPaciente(paciente,this.id);
    this.openModal();
  }

  agregarPaciente(){
    const fecha = new Date();
    const paciente:Paciente = {
      nombre:this.forma.value.nombre,
      diagnostico:this.forma.value.diagnostico,
      fecha: fecha.getMonth().toString() +'/'+fecha.getDate().toString()+'/'+fecha.getFullYear().toString() ,
      gravedad:this.forma.value.gravedad,
      prioridad:(Object.values(this.forma.value.gravedad).some(option => option === true))?'Sí':'No',
      edadValor:this.forma.get('edad.valor')?.value,
      edadMetrica:this.forma.get('edad.metrica')?.value,
      duracionValor:this.forma.get('duracion.valor')?.value,
      duracionMetrica:this.forma.get('duracion.metrica')?.value,
      peso:this.forma.get('peso')?.value,
      tipo:this.forma.get('tipo')?.value,
      idx:this.pacientesService.PACIENTES.length
    }
    this.pacientesService.addPacientes(paciente);
    this.openModal();
  }

  openModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  cerrar(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  regresarPacientes(){
    this.router.navigate(['/paciente']);
  }

  
}
