import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { Model } from 'mongoose';
import { Alumno } from 'src/alumnos/entities/alumno.entity';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post("login")
  async login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto);
  }
}
