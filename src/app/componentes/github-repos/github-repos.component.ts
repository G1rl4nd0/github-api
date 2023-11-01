import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  repos: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGithubRepos();
  }

  getGithubRepos() {
    const url = 'https://api.github.com/users/G1RL4ND0/repos';

    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.repos = data.map(repo => ({
          name: repo.name,
          html_url: repo.html_url
        }));
      },
      (error) => {
        console.error('error fetching github repos:', error);
      }

    );
    
    

  }

}
