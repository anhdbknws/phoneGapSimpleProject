//
//  ViewController.m
//  SimplePhoneGap
//
//  Created by Nextop HN 2 on 4/21/15.
//  Copyright (c) 2015 Nextop HN 2. All rights reserved.
//

#import "ViewController.h"
#import <Cordova/CDVViewController.h>
@interface ViewController ()
@property (nonatomic, strong) CDVViewController *controller;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    _controller = [[CDVViewController alloc] init];
    _controller.view.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
    _controller.wwwFolderName = @"www";
    _controller.startPage = @"index.html";
    [self.view addSubview:_controller.view];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
